<?php
// db_connect.php

// Include the configuration file
require_once '../config/config.php';

// Function to get the database connection
function get_db_connection() {
    // Use the db_connect function from config.php
    return db_connect();
}
?>
