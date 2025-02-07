function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("tel").value;

    // Check if name is empty
    if (name === "") {
        alert("Пожалуйста, заполните имя.");
        return false;
    }

    // Check if phone number is empty or invalid format
    var phoneRegex = /^\+?\d{10,15}$/;
    if (phone === "" || !phoneRegex.test(phone)) {
        alert("Пожалуйста, заполните телефонный номер в формате +1234567890");
        return false;
    }

    // Submit the form programmatically
    document.getElementById("contact-form").submit();

    // Show success message
    document.getElementById("success-message").style.display = "block"; // Show success message
    setTimeout(function() {
        document.getElementById("success-message").style.display = "none"; // Hide message after 5 seconds
    }, 5000);

    // Return false to prevent default form submission
    return false;
    }