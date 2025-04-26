document.getElementById("nav").addEventListener("mouseover", () => {
    const navItems = document.getElementsByClassName("nav");
    for (let item of navItems) {
        item.style.display = "block"; // Show all nav items
    }
});


document.getElementById("nav").addEventListener("mouseout", () => {
    const navItems = document.getElementsByClassName("nav");
    for (let item of navItems) {
        item.style.display = "none"; // Hide all nav items
    }
});