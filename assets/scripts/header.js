document.addEventListener('DOMContentLoaded', () => {
  // Get the current URL path
  const path = window.location.pathname;

  // Remove leading slash from the path
  const page = path.substring(1);

  const navLink = document.querySelector(`nav a[href="${page}"]`);

  // If the <a> element exists, add the selected class to its parent <li>
  if (navLink) {
      navLink.parentElement.classList.add('selected');
  }
});

/* document.addEventListener('DOMContentLoaded', () => {
  // Get the current URL path
  const path = window.location.pathname;

  // Find the <a> element with href equal to the current path
  const navLink = document.querySelector(`nav a[href="${path}"]`);

  // If the <a> element exists, add the selected class to its parent <li>
  if (navLink) {
      navLink.parentElement.classList.add('selected');
  }
}); */