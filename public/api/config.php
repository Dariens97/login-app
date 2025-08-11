<?php

$host = "localhost";
$user = "netcecl_admin_tk";   
$pass = "M3]1lpc#9Y9nHX";    
$db   = "netcecl_tickets";
$RECAPTCHA_SECRET = '6Lc2D4MrAAAAAARJQltEY7lKEBT5lSIGWV3Y7u5k'; 
$MAIL_PASS = ']SjRxs@bPhmE;D.-';


// Crear conexión
$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
