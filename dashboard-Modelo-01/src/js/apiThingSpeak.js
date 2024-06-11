const inputOptions = document.querySelectorAll('#state-select-list li');
const inputText = document.getElementById('state-select-toggle__state-select');

const temperatura = document.getElementById('temperatura-valor')
const umidade = document.getElementById('umidade-valor')
const pressao = document.getElementById('pressao-valor')
const luminosidade = document.getElementById('luminosidade-valor')

let optionId = '1293177' //Chave da api do labican (padrao para o site, vai mudar de acordo com a opção escolhidad)


inputOptions.forEach(item => {
    item.addEventListener('click', () => {
        inputText.innerText = item.innerText
        optionId = item.getAttribute('data-id');
        searchDiv.dispatchEvent(new Event('click'));

        if (optionId == '1293177') {
            updateData()
        } else if (optionId == '72539') {
            updateData2()
        } else {
            updateData3()
        }

        console.log(item.innerText);
        console.log(optionId);
    });
});

function updateData() {
    const url = `https://api.thingspeak.com/channels/${optionId}/feeds/last.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.field1) {
                temperatura.textContent = data.field1;
                umidade.textContent = data.field2;
                pressao.textContent = data.field3;
                luminosidade.textContent = data.field4;
            } else {
                console.error('Não foi possível obter a temperatura.');
            }
        })
        .catch(error => {
            console.error('Erro ao recuperar dados', error);
        });
    console.log(url);
}

function updateData2() {
    const url = `https://api.thingspeak.com/channels/${optionId}/feeds/last.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.field1) {
                temperatura.textContent = data.field1;
                umidade.textContent = data.field2;
            } else {
                console.error('Não foi possível obter a temperatura.');
            }
        })
        .catch(error => {
            console.error('Erro ao recuperar dados', error);
        });
    console.log(url);
}

function updateData3() {
    const url = `https://api.thingspeak.com/channels/${optionId}/feeds/last.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.field1) {
                temperatura.textContent = data.field1;
                umidade.textContent = data.field2;
            } else {
                console.error('Não foi possível obter a temperatura.');
            }
        })
        .catch(error => {
            console.error('Erro ao recuperar dados', error);
        });
    console.log(url);
}


document.addEventListener('DOMContentLoaded', function () {
    updateData();
    setInterval(updateData, 120000);  //Tempo é lido em milesegundos
});
// const url = `https://api.thingspeak.com/channels/${optionId}/fields/${numeroDeLeituras}/last.json`