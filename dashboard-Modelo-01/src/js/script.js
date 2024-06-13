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

        cleanGrafico();

        if (optionId == '1293177') {
            updateData();
            temperaturaGrafico();
            umidadeGrafico();

        } else if (optionId == '72539') {
            updateData2();
            temperaturaGrafico();
            umidadeGrafico();

        } else {
            updateData3();
            temperaturaGrafico();
            umidadeGrafico();

        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    updateData();
    temperaturaGrafico();
    umidadeGrafico();

    setInterval(updateData, 180000);  //Tempo é lido em milesegundos
    setInterval(temperaturaGrafico, 180000);
    setInterval(umidadeGrafico, 180000);
});

