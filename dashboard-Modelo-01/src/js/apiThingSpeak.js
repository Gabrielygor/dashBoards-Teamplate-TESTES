const inputOptions = document.querySelectorAll('#state-select-list li');
const inputText = document.getElementById('state-select-toggle__state-select');

const temperatura = document.getElementById('temperatura-valor')

let optionId = '1293177' //Chave da api do labican (padrao para o site, vai mudar de acordo com a opção escolhidad)
const numeroDeLeituras = '1'

inputOptions.forEach(item => {
    item.addEventListener('click', () => {
        inputText.innerText = item.innerText
        optionId = item.getAttribute('data-id');
        updateTemperature();
        searchDiv.dispatchEvent(new Event('click'));
        
        console.log(item.innerText);
        console.log(optionId);
    });
});

function updateTemperature() {
    const url = `https://api.thingspeak.com/channels/${optionId}/fields/${numeroDeLeituras}/last.json`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.field1) {
                document.getElementById('temperatura-valor').textContent = data.field1;
            } else {
                console.error('Não foi possível obter a temperatura.');
            }
        })
        .catch(error => {
            console.error('Erro ao recuperar a temperatura:', error);
        });

        console.log(url);
}

document.addEventListener('DOMContentLoaded', function() {
    updateTemperature();
    setInterval(updateTemperature, 60000);
});