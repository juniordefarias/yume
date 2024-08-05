function calcularTaxa() {
  const parcela = document.getElementById('parcela').value;
  const bandeira = document.getElementById('bandeira').value;
  const recebimento = document.getElementById('recebimento').value;
  const valor = parseFloat(document.getElementById('valor').value);

  // Exemplo de taxas, você deve ajustar de acordo com as suas taxas reais
  const taxas = {
      debito: { visa: 0.75, mastercard: 0.75, amex: 1.88, elo: 1.88 },
      credito_vista: { visa: 2.69, mastercard: 2.69, amex: 4.46, elo: 4.46 },
      credito_2x: { visa: 3.94, mastercard: 3.94, amex: 5.81, elo: 5.81 },
      credito_6x: { visa: 5.99, mastercard: 5.99, amex: 7.83, elo: 7.83 },
      credito_12x: { visa: 8.99, mastercard: 8.99, amex: 10.77, elo: 10.77 },
  };

  const recebimentoTaxas = {
      '1_dia': 1.0, // Exemplo: taxa de antecipação de 1% para recebimento em 1 dia útil
      '30_dias': 0.0 // Sem taxa adicional para recebimento em 30 dias
  };

  const taxaParcela = taxas[parcela][bandeira];
  const taxaRecebimento = recebimentoTaxas[recebimento];
  const taxaTotal = taxaParcela + taxaRecebimento;

  const valorLiquido = valor - (valor * (taxaTotal / 100));

  document.getElementById('resultado').innerText = `${valorLiquido.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })}`
}

function adicionarOuvintes() {
  const selects = ['parcela', 'bandeira', 'recebimento'];
  selects.forEach(id => {
      document.getElementById(id).addEventListener('change', calcularTaxa);
  });

  // Adiciona ouvinte de evento blur ao input
  document.getElementById('valor').addEventListener('input', calcularTaxa);
}

document.addEventListener('DOMContentLoaded', function() {
  calcularTaxa();
  adicionarOuvintes();
});