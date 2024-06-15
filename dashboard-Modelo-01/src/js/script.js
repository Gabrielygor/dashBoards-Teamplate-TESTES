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
            luminosidadeGrafico();
            pressaoGrafico();

        } else if (optionId == '72539') {
            cleanGrafico();

            updateData2();
            temperaturaGrafico();
            umidadeGrafico();
            luminosidadeGrafico();
            pressaoGrafico();

        } else {
            cleanGrafico();

            updateData3();
            temperaturaGrafico();
            umidadeGrafico();
            luminosidadeGrafico();
            pressaoGrafico();

        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    cleanGrafico();
    updateData();
    temperaturaGrafico();
    umidadeGrafico();
    luminosidadeGrafico();
    pressaoGrafico();

    setInterval(updateData, 180000);  //Tempo é lido em milesegundos
    setInterval(temperaturaGrafico, 180000);
    setInterval(umidadeGrafico, 180000);
    setInterval(luminosidadeGrafico, 180000);
    setInterval(pressaoGrafico, 180000);

});

