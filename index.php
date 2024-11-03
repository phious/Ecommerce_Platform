<?php
// index.php

// Start the session
session_start();

// Include the database connection
include 'includes/db_connect.php';

// Include header component
include 'components/header.html';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Platform</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to the E-Commerce Platform</h1>
        <nav>
            <ul>
                <li><a href="pages/index.html">Home</a></li>
                <li><a href="pages/inventory.html">Inventory Management</a></li>
                <li><a href="pages/checkout.html">Checkout</a></li>
                <li><a href="pages/product.html">Products</a></li>
            </ul>
        </nav>
    </div>

    <?php
    // Include footer component
    include 'components/footer.html';
    ?>
</body>
</html>
