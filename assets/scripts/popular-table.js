const opcoes = {
  parcelas: [
      { value: 'debito', text: 'Débito' },
      { value: 'credito_vista', text: 'Crédito à vista' },
      { value: 'credito_2x', text: 'Crédito 2x' },
      { value: 'credito_6x', text: 'Crédito 6x' },
      { value: 'credito_12x', text: 'Crédito 12x' }
  ],
  bandeiras: [
      { value: 'visa', text: 'Visa' },
      { value: 'mastercard', text: 'MasterCard' },
      { value: 'amex', text: 'Amex' },
      { value: 'elo', text: 'Elo' }
  ],
  prazosRecebimento: [
      { value: '1_dia', text: '1 dia útil' },
      { value: '30_dias', text: '30 dias' }
  ]
};

// Função para popular os selects
function popularSelects() {
  const selectParcela = document.getElementById('parcela');
  const selectBandeira = document.getElementById('bandeira');
  const selectRecebimento = document.getElementById('recebimento');

  popularOptions(selectParcela, opcoes.parcelas);
  popularOptions(selectBandeira, opcoes.bandeiras);
  popularOptions(selectRecebimento, opcoes.prazosRecebimento);
}

// Função auxiliar para popular as opções de um select
function popularOptions(select, options) {
  options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      select.appendChild(optionElement);
  });
}

// Chama a função para popular os selects quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  popularSelects();
});