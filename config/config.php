<?php
// config.php

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');   // Replace with your database username
define('DB_PASS', 'your_password');   // Replace with your database password
define('DB_NAME', 'ecommerce_db');    // Replace with your database name

// Connect to the database
function db_connect() {
    $connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
    
    return $connection;
}
?>
