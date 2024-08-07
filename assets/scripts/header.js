/* document.addEventListener('DOMContentLoaded', () => {
  // Get the current URL path
  const path = window.location.pathname;

  // Remove leading slash from the path
  const page = path.substring(1);

  const navLink = document.querySelector(`nav a[href="${page}"]`);

  // If the <a> element exists, add the selected class to its parent <li>
  if (navLink) {
      navLink.parentElement.classList.add('selected');
  }
}); */

function handleToggleNav() {
  const nav = document.querySelectorAll('header nav')[0];
  //nav.classList.toggle('animate__animated', 'animate__fadeInUp');
  console.log('clicou');

  console.log(nav.style.transform)

  //nav.style.right = nav.style.right === '0px' ? '-100vh' : '0'
  nav.style.transform = nav.style.transform === 'translateX(0px)' ? 'translateX(100%)' : 'translateX(0px)'

  //nav.style.right = 0; 
}

function loadNavOptionSelected() {
  // Get the current URL path
  const path = window.location.pathname;

  // Remove leading slash from the path
  const page = path.substring(1);

  const navLink = document.querySelectorAll(`nav > ul > li > a[href="${page}"]`);

  console.log({page, navLink});

  Array.from(navLink).forEach(link => link.parentElement.classList.add('selected'));
}

function notToAnimateNavUl() {
  const uls = document.querySelectorAll('header nav > ul');
  uls.forEach(ul => ul.classList.add('not-to-animate'));

  console.log(uls)
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelectorAll('header button svg')[0];
  button.onclick = handleToggleNav;

  loadNavOptionSelected();

  notToAnimateNavUl();
});