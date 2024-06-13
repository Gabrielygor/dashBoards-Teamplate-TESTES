import { updateData, updateData2, updateData3 } from './apiThingSpeak.js';
import { temperaturaGrafico, umidadeGrafico, pressaoGrafico, luminosidadeGrafico, cleanGrafico } from './graphics.js'

const inputOptions = document.querySelectorAll('#state-select-list li');
const inputText = document.getElementById('state-select-toggle__state-select');
const searchDiv = document.getElementById('state-select-toggle');

export let optionId = '1293177'

inputOptions.forEach(item => {

    item.addEventListener('click', () => {
        inputText.innerText = item.innerText
        optionId = item.getAttribute('data-id');
        searchDiv.dispatchEvent(new Event('click'));

        if (optionId == '1293177') {
            cleanGrafico();
            updateData();
            temperaturaGrafico();
            umidadeGrafico();
        } else if (optionId == '72539') {
            cleanGrafico();
            updateData2();
            temperaturaGrafico();
            umidadeGrafico();
        } else {
            cleanGrafico();
            updateData3();
            temperaturaGrafico();
            umidadeGrafico();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    cleanGrafico();
    updateData();
    temperaturaGrafico();
    umidadeGrafico();

    setInterval(updateData, 30000);  //Tempo é lido em milesegundos
    setInterval(temperaturaGrafico, 30000);
    setInterval(umidadeGrafico, 30000);
});

