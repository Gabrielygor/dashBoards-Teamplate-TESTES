
const confortoTermico = document.getElementById('indeceDeConfortoTermico');

export function indeceDeConfortoTermico (temperaturaAtual, umidadeAtual) {
    const heatIndex = temperaturaAtual - (0.55 - 0.0055 * umidadeAtual) * (temperaturaAtual - 14.5);
    confortoTermico.textContent = parseFloat(heatIndex).toFixed(1);
    return heatIndex;
}





/* 

    O Índice de Conforto Térmico (ICT) é uma medida utilizada para avaliar a sensação de conforto ou desconforto térmico de uma pessoa em um determinado ambiente.


*/