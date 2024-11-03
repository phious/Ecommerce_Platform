<?php
// getProducts.php

// Include the database connection
require_once '../includes/db_connect.php';

// Set header to allow cross-origin access if necessary
header('Content-Type: application/json');

try {
    // Get the database connection
    $connection = get_db_connection();

    // Query to retrieve all products
    $query = "SELECT id, name, description, price, stock_quantity, image_url FROM products";
    $result = $connection->query($query);

    // Check if products are found
    if ($result->num_rows > 0) {
        $products = array();

        // Fetch each product
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }

        // Return products as JSON
        echo json_encode(['status' => 'success', 'data' => $products]);
    } else {
        // Return empty response if no products found
        echo json_encode(['status' => 'success', 'data' => []]);
    }

    // Close the database connection
    $connection->close();
} catch (Exception $e) {
    // Return error response in case of exception
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
