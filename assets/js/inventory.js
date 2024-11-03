// inventory.js

// Add event listeners for save and delete buttons in the inventory table
document.addEventListener('DOMContentLoaded', () => {
    // Handle save button actions
    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', saveProduct);
    });

    // Handle delete button actions
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', deleteProduct);
    });

    // Handle adding a new product
    document.getElementById('add-product-form').addEventListener('submit', addNewProduct);
});

// Function to save changes to a product
function saveProduct(event) {
    event.preventDefault();
    const row = event.target.closest('tr');
    const productName = row.querySelector('td:nth-child(2)').textContent;
    const quantity = row.querySelector('input[type="number"]').value;

    alert(`Saved changes for ${productName}. New quantity: ${quantity}`);
    // In a real application, an API call would be made here to update the server
}

// Function to delete a product from the table
function deleteProduct(event) {
    event.preventDefault();
    const row = event.target.closest('tr');
    const productName = row.querySelector('td:nth-child(2)').textContent;

    if (confirm(`Are you sure you want to delete ${productName}?`)) {
        row.remove();
        alert(`${productName} has been deleted.`);
        // In a real application, an API call would be made here to delete the product from the server
    }
}

// Function to add a new product to the inventory
function addNewProduct(event) {
    event.preventDefault();

    // Retrieve form values
    const productName = document.getElementById('new-product-name').value;
    const productQuantity = document.getElementById('new-product-quantity').value;
    const productPrice = document.getElementById('new-product-price').value;

    // Create a new row in the inventory table
    const table = document.querySelector('.inventory-table tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>NEW</td>
        <td>${productName}</td>
        <td><input type="number" value="${productQuantity}" min="0"></td>
        <td>$${parseFloat(productPrice).toFixed(2)}</td>
        <td>
            <button class="btn-edit">Save</button>
            <button class="btn-delete">Delete</button>
        </td>
    `;

    // Append new row to the table
    table.appendChild(newRow);

    // Clear the form fields
    document.getElementById('add-product-form').reset();

    // Add event listeners for the new row's buttons
    newRow.querySelector('.btn-edit').addEventListener('click', saveProduct);
    newRow.querySelector('.btn-delete').addEventListener('click', deleteProduct);

    alert(`${productName} has been added to the inventory.`);
}
