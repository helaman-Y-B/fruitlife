// / This script handles the navigation bar functionality for different screen sizes
let screenWidth = window.innerWidth

// An event listener to check if the screen width changes
// If it does, the page will reload to apply the new styles
window.addEventListener("resize", () => {
    if (screenWidth !== window.innerWidth) {
        window.location.reload(); // Reload the page on resize to apply new styles
    }
})

// Check the initial screen width and set up the navigation bar functionality
if (screenWidth < 560 ) {
    // For small screens, use click event to toggle navigation items
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
    // For larger screens, use mouseover and mouseout events to show/hide navigation items
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