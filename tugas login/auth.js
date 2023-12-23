function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "shibaraihanah" && password === "student-nf23") {
        alert("Login successful");
        window.location.href = "success.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}