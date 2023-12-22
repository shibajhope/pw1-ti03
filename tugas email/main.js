function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var departureTime = document.getElementById("departureTime").value;
    var numTickets = document.getElementById("numTickets").value;

    var outputContainer = document.getElementById("output");
    outputContainer.innerHTML = "";

    var isValid = true;

    // Name validation
    if (name.length > 30) {
        outputContainer.innerHTML += "Name should not exceed 30 characters.<br>";
        isValid = false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        outputContainer.innerHTML += "Invalid email format.<br>";
        isValid = false;
    }

    // Departure time validation
    var timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(departureTime)) {
        outputContainer.innerHTML += "Invalid departure time format (HH:MM).<br>";
        isValid = false;
    }

    // Number of tickets validation
    if (numTickets < 1 || numTickets > 10 || isNaN(numTickets) || !Number.isInteger(parseFloat(numTickets))) {
        outputContainer.innerHTML += "Number of tickets should be an integer between 1 and 10.<br>";
        isValid = false;
    }

    // Display data if valid
    if (isValid) {
        outputContainer.innerHTML = `Name: ${name}<br>Email: ${email}<br>Departure Time: ${departureTime}<br>Number of Tickets: ${numTickets}`;
    }
}
