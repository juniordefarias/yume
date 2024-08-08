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

function observeParent(element, delay=0) {
  const elementos = document.querySelectorAll(element);

  elementos.forEach(elemento => elemento.parentElement.classList.add('animate__animated'));
  elementos.forEach(elemento => elemento.parentElement.style.opacity = 0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.parentElement.classList.add('animate__fadeInUp');
          console.log(entry.target.parentElement);
        }, delay);

        setTimeout(() => {
          child.style.opacity = 1;
          child.classList.remove('animate__animated', 'animate__fadeInUp');
        }, 1000);
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

          // remover o animate depois de 1 segundo
          setTimeout(() => {
            child.style.opacity = 1;
            child.classList.remove('animate__animated', 'animate__fadeInUp');
          }, 1000);
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

          setTimeout(() => {
            child.classList.add('animate__fadeInUp');

            setTimeout(() => {
              child.style.opacity = 1;
              child.classList.remove('animate__animated', 'animate__fadeInUp');
            }, 1000);

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
      Array.from(elemento.children).forEach(child => {
        child.style.opacity = 0;
        child.classList.add('animate__animated');
      });

      observer.observe(elemento)
    } 
  });
}

document.addEventListener("DOMContentLoaded", function() {
  observe('h1', 100);
  observe('h1 + p', 400);
  observeParent('h2', 150);
  observe('h3', 300);
  observe('button', 400);

  observe('.home_container > div > div strong', 300);

  //observeParent('form', 0);
  observe('.form_container > div > div:first-of-type')
  observe('form', 100);

  observe('footer > div > div > div > svg', 200);
  observe('footer > div > div > div > p', 100);
  observe('footer > div > div strong', 100);

  observe('.to-animate', 100);

  //observeUL();
  observeChildren('ul');
  
  observeChildren('.faq_container > div > div:last-of-type');
});

