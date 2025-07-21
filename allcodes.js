document.addEventListener('DOMContentLoaded', () => {
  // Get the hamburger menu icon and navigation menu elements by their IDs
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navigationMenu = document.getElementById('nav-menu');

  // Check if both elements exist before adding event listener
  if (hamburgerIcon && navigationMenu) {
    // Toggle the 'active' class on the navigation menu when hamburger icon is clicked
    hamburgerIcon.addEventListener('click', () => {
      navigationMenu.classList.toggle('active');
    });
  }
});
