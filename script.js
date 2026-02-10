function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
}
