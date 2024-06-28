function sendEmail() {
    // Get form values
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Basic validation
    if (!fullname || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // You can use a service like Formspree or your own server-side script to send email
    // Replace 'YOUR_EMAIL_ADDRESS' with your own email address or server endpoint
    var formData = {
        fullname: fullname,
        email: email,
        message: message
    };

    // Assuming you're using Formspree for email sending (replace with your own implementation)
    fetch('https://formspree.io/your_email_here', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Message sent successfully!');
            // Optionally reset the form
            document.getElementById('fullname').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Failed to send message. Please try again later.');
        });
}
