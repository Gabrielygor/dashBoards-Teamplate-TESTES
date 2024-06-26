
const confortoTermico = document.getElementById('indeceDeConfortoTermico');
const pontoDeOrvalho = document.getElementById('pontoDeOrvalho')
const altitudeAproximada = document.getElementById('altitudeAproximada')
const indiceDeCalor = document.getElementById('indiceDeCalor')

console.log(altitudeAproximada);



export function calcIndeceDeConfortoTermico(temperaturaAtual, umidadeAtual) {
    const heatIndex = temperaturaAtual - (0.55 - 0.0055 * umidadeAtual) * (temperaturaAtual - 14.5);
    confortoTermico.textContent = parseFloat(heatIndex).toFixed(1);
    return heatIndex;
}

export function calcIndiceDeCalor(temperaturaAtual, umidadeAtual) {
    const temperatura = parseFloat(temperaturaAtual);
    const umidade = parseFloat(umidadeAtual);

    let indiceCalor = temperatura - ((0.55 - 0.0055 * umidade) * (temperatura - 58));
    indiceCalor = Math.round(indiceCalor * 10) / 10;

    indiceDeCalor.textContent = parseFloat(indiceCalor).toFixed(1)
    return indiceCalor;
}

export function calcPontoDeOrvalho(temperaturaAtual, umidadeAtual) {
    const temperatura = parseFloat(temperaturaAtual);
    const umidade = parseFloat(umidadeAtual);

    const pontodeOrvalho = temperatura - ((100 - umidade) / 5);
    pontoDeOrvalho.textContent = parseFloat(pontodeOrvalho).toFixed(1);
    return pontodeOrvalho;
}

export function calcAltitudeAproximada(pressaoAtual) {
    //OBS : PRESSAO LIDA EM hPa 
    //Código que corresponde à pressão atmosférica padrão ao nível médio do mar, equivalente a 1013,2 hectopascal (hPa).

    const pressaoNivelDoMar = 1013.25
    const escala = 8.3

    const altitude = ((pressaoNivelDoMar - pressaoAtual) / pressaoNivelDoMar) * escala * 1000;

    altitudeAproximada.textContent = parseFloat(altitude).toFixed(1)
}