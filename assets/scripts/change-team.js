function selectElements(className) {
  // Remove a classe 'selected' de todos os elementos que a possuem
  document.querySelectorAll('.selected').forEach(el => {
      el.classList.remove('selected');
  });
  // Adiciona a classe 'selected' a todos os elementos da classe especificada
  document.querySelectorAll('.' + className).forEach(el => {
      el.classList.add('selected');
  });
}

// Adiciona o event listener de clique para todos os elementos que começam com 'option'
document.querySelectorAll('[class^="option"]').forEach(el => {
  el.addEventListener('click', function() {
      // Pega a classe do elemento clicado
      const className = this.className.split(' ')[0];
      // Chama a função para selecionar os elementos da classe clicada
      selectElements(className);
  });
});
