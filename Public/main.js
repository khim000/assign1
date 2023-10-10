// JavaScript to handle form submission and success message
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    // Here, you can add code to send the form data to your server using AJAX if needed.
    
    // Clear the form fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Display success message
    document.getElementById('success-message').textContent = 'Your message has been sent successfully.';
    setTimeout(function () {
        document.getElementById('success-message').textContent = '';
        window.location.href = 'homeejs';
    }, 3000);
});