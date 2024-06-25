
const confortoTermico = document.getElementById('indeceDeConfortoTermico');
const pontoDeOrvalho = document.getElementById('pontoDeOrvalho')
const altitudeAproximada = document.getElementById('altitudeAproximada')

console.log(altitudeAproximada);



export function calcIndeceDeConfortoTermico(temperaturaAtual, umidadeAtual) {
    const heatIndex = temperaturaAtual - (0.55 - 0.0055 * umidadeAtual) * (temperaturaAtual - 14.5);
    confortoTermico.textContent = parseFloat(heatIndex).toFixed(1);
    return heatIndex;
}

export function calcPontoDeOrvalho(temperaturaAtual, umidadeAtual) {
    const temperatura = parseFloat(temperaturaAtual);
    const umidade = parseFloat(umidadeAtual);

    const pontodeOrvalho = temperatura - ((100 - umidade) / 5);
    pontoDeOrvalho.textContent = parseFloat(pontodeOrvalho).toFixed(1);
    return pontodeOrvalho;
}

export function calcAltitudeAproximada (pressaoAtual) {
    //OBS : PRESSAO LIDA EM hPa

    const pressaoNivelDoMar = 1013.25
    const escala = 8.3

    const altitude = ((pressaoNivelDoMar - pressaoAtual) / pressaoNivelDoMar) * escala * 1000;

    console.log(altitude);
    altitudeAproximada.textContent = parseFloat(altitude).toFixed(1)
}