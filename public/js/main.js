let screenWidth = window.innerWidth

window.addEventListener("resize", () => {
    if (screenWidth !== window.innerWidth) {
        window.location.reload(); // Reload the page on resize to apply new styles
    }
})


if (screenWidth < 768 ) {
    document.getElementById("nav").addEventListener("click", () => {
        const navItems = document.getElementsByClassName("nav");
        for (let item of navItems) {
            if (item.style.display === "block") {
                item.style.display = "none"; // Hide nav items
                document.getElementById("nav-arrow").style.transform = "rotate(0deg)"; // Reset arrow rotation
            } else {
                item.style.display = "block"; // Show nav items
                document.getElementById("nav-arrow").style.transform = "rotate(180deg)"; // Rotate arrow
            }
        }
    })
} else {
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
}