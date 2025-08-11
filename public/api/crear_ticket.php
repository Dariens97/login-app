<?php
header("Content-Type: application/json");
require_once 'config.php';

function responder($exito, $mensaje) {
    echo json_encode([
        "success" => $exito,
        "message" => $mensaje
    ]);
    exit;
}

$data = $_POST;

if (!$data || count($data) === 0) {
    responder(false, "No se recibió ningún dato.");
}


// 🐝 Honeypot
if (!empty($data['website'])) {
    responder(false, "Spam detectado (honeypot).");
}

// Validar campos
$campos = ["nombre", "telefono", "correo", "asunto", "mensaje"];
foreach ($campos as $campo) {
    if (empty($data[$campo])) {
        responder(false, "Falta el campo: $campo.");
    }
}

$nombre   = $data["nombre"];
$correo    = $data["correo"];
$telefono = $data["telefono"];
$asunto   = $data["asunto"];
$mensaje  = $data["mensaje"];

$stmt = $conn->prepare("INSERT INTO tickets (nombre, telefono, correo, asunto, mensaje) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $nombre, $telefono, $correo, $asunto, $mensaje);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8'; // ✅ Esto elimina los errores de codificación

try {
    $mail->isSMTP();
    $mail->Host       = 'mail.net-ce.cl';       // Servidor SMTP del hosting (confírmalo en cPanel si difiere)
    $mail->SMTPAuth   = true;
    $mail->Username   = 'net-ce@net-ce.cl';     // Correo emisor
    $mail->Password = $MAIL_PASS;        // Contraseña o app-password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('net-ce@net-ce.cl', 'Soporte NET-CE');
    $mail->addAddress('net-ce@net-ce.cl', 'Equipo NET-CE'); // Para ti
    $mail->addAddress($correo, $nombre);                    // Para el cliente

    $mail->isHTML(true);
    $mail->Subject = "Ticket recibido: $asunto";
    $mail->Body    = "
        <h2>Hola $nombre,</h2>
        <p>Gracias por contactarte con NET-CE. Tu ticket fue recibido con éxito.</p>
        <h4>Resumen:</h4>
        <ul>
            <li><strong>Nombre:</strong> $nombre</li>
            <li><strong>Correo:</strong> $correo</li>
            <li><strong>Teléfono:</strong> $telefono</li>
            <li><strong>Asunto:</strong> $asunto</li>
            <li><strong>Mensaje:</strong><br>$mensaje</li>
        </ul>
        <p>Nos pondremos en contacto contigo lo antes posible. Gracias por confiar en nosotros.</p>
        <p>— Equipo NET-CE</p>
    ";

    $mail->send();
} catch (Exception $e) {
    error_log("Error al enviar el correo: {$mail->ErrorInfo}");
}

if ($stmt->execute()) {
    responder(true, "Ticket creado correctamente.");
} else {
    responder(false, "Error al guardar en la base de datos.");
}

$stmt->close();
$conn->close();
?>
