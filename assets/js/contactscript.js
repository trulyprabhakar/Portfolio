document.addEventListener('DOMContentLoaded', function() {
    // Get the form element by its ID
    var form = document.getElementById('contact-form');

    // Listen for the form's submit event
    form.addEventListener('submit', function(event) {
    
        event.preventDefault();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var subject = document.getElementById('subject').value.trim();
        var message = document.getElementById('message').value.trim();
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
    });
});
