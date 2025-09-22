// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username && password) {
        // Hide login page and show dashboard
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
    } else {
        alert('Please enter both username and password');
    }
}

// Function to handle logout
function logout() {
    // Hide dashboard and show login page
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    
    // Clear input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Add active class to clicked menu items
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});