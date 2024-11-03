<?php
// manageInventory.php

// Include the database connection
require_once '../includes/db_connect.php';

// Set header to allow cross-origin access and to accept JSON input
header('Content-Type: application/json');

// Retrieve data from the incoming POST request
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['productId']) && isset($data['newQuantity'])) {
    $productId = $data['productId'];
    $newQuantity = (int)$data['newQuantity'];

    try {
        // Get the database connection
        $connection = get_db_connection();

        // Update the stock quantity for the specified product
        $stmt = $connection->prepare("UPDATE products SET stock_quantity = ? WHERE id = ?");
        $stmt->bind_param("ii", $newQuantity, $productId);

        // Execute the query and check if successful
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Stock updated successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to update stock.']);
        }

        // Close the statement and connection
        $stmt->close();
        $connection->close();
    } catch (Exception $e) {
        // Return error response in case of exception
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
} else {
    // Return error if required data is missing
    echo json_encode(['status' => 'error', 'message' => 'Invalid input data.']);
}
?>
