// Get the menu button, close button, and sidebar
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Function to show the sidebar when the menu button is clicked
menuBtn.addEventListener('click', function() {
    sidebar.classList.add('active');
});

// Function to hide the sidebar when the close button is clicked
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
});