// app.js

import { getAllProducts, addProduct, updateProduct, deleteProduct } from './database.js';

// Function to render products in the inventory table
function renderProducts() {
    const products = getAllProducts();
    const tableBody = document.querySelector('.inventory-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td><input type="number" value="${product.quantity}" min="0"></td>
            <td>$${parseFloat(product.price).toFixed(2)}</td>
            <td>
                <button class="btn-edit">Save</button>
                <button class="btn-delete">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);

        // Add event listeners for the buttons in the new row
        row.querySelector('.btn-edit').addEventListener('click', () => {
            const quantityInput = row.querySelector('input[type="number"]');
            updateProduct(product.id, quantityInput.value);
            alert(`Updated ${product.name} quantity to ${quantityInput.value}`);
        });

        row.querySelector('.btn-delete').addEventListener('click', () => {
            if (confirm(`Are you sure you want to delete ${product.name}?`)) {
                deleteProduct(product.id);
                renderProducts(); // Re-render the table
                alert(`${product.name} has been deleted.`);
            }
        });
    });
}

// Handle adding new products from the form
document.getElementById('add-product-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const productName = document.getElementById('new-product-name').value;
    const productQuantity = document.getElementById('new-product-quantity').value;
    const productPrice = document.getElementById('new-product-price').value;

    addProduct(productName, productQuantity, productPrice);
    renderProducts(); // Re-render the table to show the new product
    document.getElementById('add-product-form').reset(); // Reset form fields
    alert(`${productName} has been added to the inventory.`);
});

// Initial render of products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
