// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Password toggle function
    window.toggleVisibility = function() {
        const passwordField = document.getElementById('password');
        const toggleButton = document.getElementById('toggleButton');
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleButton.textContent = 'Hide Password';
        } else {
            passwordField.type = 'password';
            toggleButton.textContent = 'Show Password';
        }
    }

    // Cleave.js phone number formatting
    new Cleave('#phone', {
        delimiters: ['-', '-'],    // Format like 012-345-6789
        blocks: [3, 3, 4],
        numericOnly: true
    });

});
