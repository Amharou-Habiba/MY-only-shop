// Highlight active navigation link
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#nav li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

// Validate the contact form
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Show category details
function showCategory(category) {
    alert(`You selected the ${category} category.`);
}
