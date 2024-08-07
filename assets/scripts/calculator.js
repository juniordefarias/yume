/* function calcularTaxa() {
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

  document.getElementById('taxa-selecionado').innerText = `${String(taxaTotal).replace('.', ',')}%`

  //document.getElementById('recebimento-selecionado').innerText = ;
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
}); */

function calcularTaxa() {
  const parcela = document.getElementById('parcela').value;
  const bandeira = document.getElementById('bandeira').value;
  const recebimento = document.getElementById('recebimento').value;
  const valor = parseFloat(document.getElementById('valor').value);

  // Exemplo de taxas, ajustadas para incluir diferentes taxas de acordo com o prazo de recebimento
  const taxas = {
    debito: {
        visa: { '1_dia': 0.75, '30_dias': 0.67 },
        mastercard: { '1_dia': 0.75, '30_dias': 0.67 },
        amex: { '1_dia': 1.88, '30_dias': 1.72 },
        elo: { '1_dia': 1.88, '30_dias': 1.72 }
    },
    credito_vista: {
        visa: { '1_dia': 2.69, '30_dias': 2.19 },
        mastercard: { '1_dia': 2.69, '30_dias': 2.19 },
        amex: { '1_dia': 4.46, '30_dias': 3.09 }, // Exemplo de taxa menor para 30 dias
        elo: { '1_dia': 4.46, '30_dias': 3.09 }
    },
    credito_2x: {
        visa: { '1_dia': 3.94, '30_dias': 3.24 },
        mastercard: { '1_dia': 3.94, '30_dias': 3.24 },
        amex: { '1_dia': 5.81, '30_dias': 5.09 }, // Exemplo de taxa menor para 30 dias
        elo: { '1_dia': 5.81, '30_dias': 5.09 }
    },
    credito_6x: {
        visa: { '1_dia': 5.99, '30_dias': 4.59 },
        mastercard: { '1_dia': 5.99, '30_dias': 4.59 },
        amex: { '1_dia': 7.83, '30_dias': 7.00 }, // Exemplo de taxa menor para 30 dias
        elo: { '1_dia': 7.83, '30_dias': 7.00 }
    },
    credito_12x: {
        visa: { '1_dia': 8.99, '30_dias': 7.5 },
        mastercard: { '1_dia': 8.99, '30_dias': 7.5 },
        amex: { '1_dia': 10.77, '30_dias': 8.99 }, // Exemplo de taxa menor para 30 dias
        elo: { '1_dia': 10.77, '30_dias': 8.99 }
    },
  };

  const taxaParcela = taxas[parcela][bandeira][recebimento];
  const valorLiquido = valor - (valor * (taxaParcela / 100));

  document.getElementById('recebimento-selecionado').innerText = (
    recebimento === '1_dia'
      ? '1 dia útil'
      : '30 dias'
  );

  document.getElementById('taxa-selecionado').innerText = `${String(taxaParcela).replace('.', ',')}%`;

  document.getElementById('resultado').innerText = `${valorLiquido.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  })}`;
}

// Função para adicionar ouvintes de eventos aos selects e ao input
function adicionarOuvintes() {
  const selects = ['parcela', 'bandeira', 'recebimento'];
  selects.forEach(id => {
      document.getElementById(id).addEventListener('change', calcularTaxa);
  });

  // Adiciona ouvinte de evento input ao campo de valor
  document.getElementById('valor').addEventListener('input', calcularTaxa);
}

// Chama a função para popular os selects e adicionar ouvintes quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  adicionarOuvintes();
});