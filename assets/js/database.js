// database.js

// Simulated database as an array of product objects
let productDatabase = [
    { id: 1, name: 'Product A', quantity: 100, price: 29.99 },
    { id: 2, name: 'Product B', quantity: 200, price: 39.99 },
    { id: 3, name: 'Product C', quantity: 150, price: 19.99 },
];

// Function to get all products
function getAllProducts() {
    return productDatabase;
}

// Function to add a new product
function addProduct(name, quantity, price) {
    const newId = productDatabase.length ? productDatabase[productDatabase.length - 1].id + 1 : 1;
    const newProduct = { id: newId, name, quantity, price: parseFloat(price) };
    productDatabase.push(newProduct);
}

// Function to update a product
function updateProduct(id, quantity) {
    const product = productDatabase.find(p => p.id === id);
    if (product) {
        product.quantity = parseInt(quantity);
    }
}

// Function to delete a product
function deleteProduct(id) {
    productDatabase = productDatabase.filter(product => product.id !== id);
}

// Export functions for use in other files
export { getAllProducts, addProduct, updateProduct, deleteProduct };
