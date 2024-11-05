// script.js
function calcularJurosCompostos() {
    // Obter valores dos inputs
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseInt(document.getElementById('frequency').value);
    const aporte = parseFloat(document.getElementById('aporte').value);

    // Verificar se os valores são válidos
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(aporte)) {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Calcular montante final sem aporte inicial
    const montanteInicial = principal * Math.pow((1 + rate / frequency), frequency * time);

    // Calcular montante final com aportes periódicos
    const montanteAportes = aporte * ((Math.pow((1 + rate / frequency), frequency * time) - 1) / (rate / frequency));

    // Montante total é a soma do montante inicial e dos aportes
    const montanteTotal = montanteInicial + montanteAportes;

    // Calcular valor investido total
    const valorInvestido = principal + (aporte * frequency * time);

    // Calcular juros ganhos
    const jurosGanhos = montanteTotal - valorInvestido;

    // Formatar valores para o padrão brasileiro
    const montanteFormatado = montanteTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valorInvestidoFormatado = valorInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const jurosGanhosFormatado = jurosGanhos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Exibir resultados
    document.getElementById('valorInvestido').innerText = `Valor Investido: ${valorInvestidoFormatado}`;
    document.getElementById('montanteFinal').innerText = `Montante Final: ${montanteFormatado}`;
    document.getElementById('jurosGanhos').innerText = `Juros Ganhos: ${jurosGanhosFormatado}`;
}
