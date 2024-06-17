import { optionId } from './script.js'

const temperatura = document.getElementById('temperatura-valor')
const umidade = document.getElementById('umidade-valor')
const pressao = document.getElementById('pressao-valor')
const luminosidade = document.getElementById('luminosidade-valor')


export function updateData() {
    const url = `https://api.thingspeak.com/channels/${optionId}/feeds/last.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.field1) {
                temperatura.textContent = parseFloat(data.field1).toFixed(1);
                umidade.textContent = parseFloat(data.field2).toFixed(1);
                pressao.textContent = parseFloat(data.field3).toFixed(1);
                luminosidade.textContent = parseFloat(data.field4).toFixed(1);
            } else {
                console.error('Não foi possível obter a temperatura.');
            }
        })
        .catch(error => {
            console.error('Erro ao recuperar dados', error);
        });
    console.log(url);
}

export function updateData2() {
    const url = `https://api.thingspeak.com/channels/${optionId}/feeds/last.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.field1) {
                temperatura.textContent = parseFloat(data.field1).toFixed(1);
                umidade.textContent = parseFloat(data.field2).toFixed(1);
                pressao.textContent = ''
                luminosidade.textContent = ''
            } else {
                console.error('Não foi possível obter a temperatura.');
            }
        })
        .catch(error => {
            console.error('Erro ao recuperar dados', error);
        });
    console.log(url);
}

export function updateData3() {
    const url = `https://api.thingspeak.com/channels/${optionId}/feeds/last.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.field1) {
                temperatura.textContent = parseFloat(data.field1).toFixed(1);
                umidade.textContent = parseFloat(data.field2).toFixed(1);
                pressao.textContent = ''
                luminosidade.textContent = ''
            } else {
                console.error('Não foi possível obter a temperatura.');
            }
        })
        .catch(error => {
            console.error('Erro ao recuperar dados', error);
        });
    console.log(url);
}

