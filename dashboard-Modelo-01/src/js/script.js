import { updateData, updateData2, updateData3 } from './apiThingSpeak.js';
import { temperaturaGrafico, umidadeGrafico, pressaoGrafico, luminosidadeGrafico } from './graphics.js'

const inputOptions = document.querySelectorAll('#state-select-list li');
const inputText = document.getElementById('state-select-toggle__state-select');
const searchDiv = document.getElementById('state-select-toggle');

export var optionId = '1293177'

inputOptions.forEach(item => {
    item.addEventListener('click', () => {
        inputText.innerText = item.innerText
        optionId = item.getAttribute('data-id');
        searchDiv.dispatchEvent(new Event('click'));

        if (optionId == '1293177') {
            updateData();
            temperaturaGrafico();
            umidadeGrafico();
            pressaoGrafico();
            luminosidadeGrafico();
        } else if (optionId == '72539') {
            updateData2();
            temperaturaGafico();
        } else {
            updateData3();
            temperaturaGafico();
        }

        console.log(item.innerText);
        console.log(optionId);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    updateData();
    temperaturaGrafico();
    umidadeGrafico();
    pressaoGrafico()
    luminosidadeGrafico();
    setInterval(updateData, 120000);  //Tempo é lido em milesegundos
});

