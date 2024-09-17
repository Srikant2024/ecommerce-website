// Form validation to check for empty fields
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("All fields must be filled out.");
        return false;
    }
    return true;
}

// Toggle password visibility
function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting for demo purposes
    document.getElementById('formMessage').textContent = 'Your message has been sent!';
});
if (window.innerWidth < 768) {
    // Adjust styles or content for mobile
    document.getElementById("myElement").style.fontSize = "12px";
} else {
    // Adjust for desktop
    document.getElementById("myElement").style.fontSize = "20px";
}
// script.js

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
        // You can extend this function to handle cart logic
    });
});
