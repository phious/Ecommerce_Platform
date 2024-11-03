// main.js

// Example of form validation for the checkout page
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.querySelector('#checkoutForm');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateCheckoutForm();
        });
    }
});

function validateCheckoutForm() {
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const addressField = document.querySelector('#address');
    let isValid = true;

    // Simple validation for name, email, and address fields
    if (nameField.value.trim() === '') {
        alert('Name is required');
        isValid = false;
    }
    if (emailField.value.trim() === '' || !validateEmail(emailField.value)) {
        alert('Valid email is required');
        isValid = false;
    }
    if (addressField.value.trim() === '') {
        alert('Address is required');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Normally, you would send the form data to the server here
        checkoutForm.submit();
    }
}

function validateEmail(email) {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
