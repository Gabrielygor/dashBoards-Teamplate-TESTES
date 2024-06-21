
const confortoTermico = document.getElementById('indeceDeConfortoTermico');
const pontoDeOrvalho = document.getElementById('pontoDeOrvalho')

export function calcIndeceDeConfortoTermico(temperaturaAtual, umidadeAtual) {
    const heatIndex = temperaturaAtual - (0.55 - 0.0055 * umidadeAtual) * (temperaturaAtual - 14.5);
    confortoTermico.textContent = parseFloat(heatIndex).toFixed(1);
    return heatIndex;
}

export function calcPontoDeOrvalho(temperaturaAtual, umidadeAtual) {
    const temperatura = parseFloat(temperaturaAtual);
    const umidade = parseFloat(umidadeAtual);

    if (isNaN(temperatura) || isNaN(umidade)) {
        throw new Error('Temperatura e umidade devem ser números válidos');
    }

    const pontodeOrvalho = temperatura - ((100 - umidade) / 5);
    pontoDeOrvalho.textContent = parseFloat(pontodeOrvalho).toFixed(1);
    return pontodeOrvalho;
}
