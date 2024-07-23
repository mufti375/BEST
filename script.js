// Select the drawer element and content area
var drawer = document.getElementById("myDrawer");
var content = document.querySelector(".content");

// Function to open or close the drawer
function toggleDrawer() {
    // Check if drawer is currently open or closed
    var isOpen = drawer.style.left === "0px" || drawer.style.left === "";

    if (!isOpen) {
        // Open the drawer
        drawer.style.left = "0";
        content.style.marginLeft = "250px"; // Adjust content area
    } else {
        // Close the drawer
        drawer.style.left = "-250px";
        content.style.marginLeft = "0"; // Reset content area
    }
}

// Close the drawer if clicked outside of it
window.onclick = function(event) {
    if (event.target !== drawer && !event.target.closest(".menu-btn")) {
        drawer.style.left = "-250px";
        content.style.marginLeft = "0";
    }
};
