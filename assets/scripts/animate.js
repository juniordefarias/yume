/* document.addEventListener("DOMContentLoaded", function() {
  const elementos = document.querySelectorAll('h2');

  elementos.forEach(elemento => elemento.classList.add('animate__animated'));
  elementos.forEach(elemento => elemento.style.opacity = 0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate__fadeInUp');
          console.log(entry.target);
        }, 200);
      } else {
        //entry.target.classList.remove('animate__slideInUp');
      }
    });
  });

  elementos.forEach(elemento => observer.observe(elemento));
}); */

function observeParent(element) {
  const elementos = document.querySelectorAll(element);

  elementos.forEach(elemento => elemento.parentElement.classList.add('animate__animated'));
  elementos.forEach(elemento => elemento.parentElement.style.opacity = 0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.parentElement.classList.add('animate__fadeInUp');
          console.log(entry.target.parentElement);
        }, 200);
      } else {
        //entry.target.classList.remove('animate__slideInUp');
      }
    });
  });

  elementos.forEach(elemento => observer.observe(elemento));
}

function observe(element, delay=0) {
  const elementos = document.querySelectorAll(element);

  elementos.forEach(elemento => elemento/* .parentElement */.classList.add('animate__animated'));
  elementos.forEach(elemento => elemento/* .parentElement */.style.opacity = 0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target/* .parentElement */.classList.add('animate__fadeInUp');
        }, delay);
      } else {
        //entry.target.classList.remove('animate__slideInUp');
      }
    });
  });

  elementos.forEach(elemento => observer.observe(elemento));
}

function observeChildren(element) {
  const elementos = document.querySelectorAll(element);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Array.from(entry.target.children).forEach((child, index) => {
          const delay = index * 100;

          child.classList.add('animate__animated');

          setTimeout(() => {
            child.classList.add('animate__fadeInUp');
          }, delay);
        });
      } 
    });
  });

  /* elementos.forEach((elemento) => {
    Array.from(elemento.children).forEach(child => child.style.opacity = 0);
  }) */
  
  elementos.forEach(elemento => {
    if (!elemento.classList.contains('not-to-animate')) {
      Array.from(elemento.children).forEach(child => child.style.opacity = 0);
      observer.observe(elemento)
    } 
  });
}

document.addEventListener("DOMContentLoaded", function() {
  observe('h1', 100);
  observe('h1 + p', 400);
  observeParent('h2');
  observe('h3', 300);
  observe('button', 400);

  observe('.home_container > div > div strong', 300);

  observeParent('form');
  observe('form', 200);

  observe('footer > div > div > div > svg', 200);
  observe('footer > div > div > div > p', 100);
  observe('footer > div > div strong', 100);

  observe('.to-animate', 100);

  //observeUL();
  observeChildren('ul');
});

