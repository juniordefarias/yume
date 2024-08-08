function redirectToMaquininhaPage() {
  window.location.href = 'maquininha.html';
}

function smoothScrollTo(target, duration) {
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - 180;
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {

    // Seleciona o formulário pelo ID
    const form = document.querySelectorAll('form')[0];

    // Rolagem suave para o formulário
    //form.scrollIntoView({ behavior: 'smooth' });
    smoothScrollTo(form, 2000);
  });
});