<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Carga el archivo de configuración
require_once 'config.php';

if ($conn->connect_error) {
    die("❌ Error de conexión a la base de datos: " . $conn->connect_error);
} else {
    echo "✅ Conexión exitosa a la base de datos";
}

$conn->close();
?>
