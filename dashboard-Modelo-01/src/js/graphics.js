import { optionId } from './script.js'

export async function temperaturaGrafico() {
    fetch(`https://api.thingspeak.com/channels/${optionId}/fields/1.json?results=600`)
        .then(response => response.json())
        .then(data => {
            const temperatures = data.feeds.map(feed => parseFloat(feed.field1));
            const timestamps = data.feeds.map(feed => feed.created_at);

            var options = {
                chart: {
                    type: 'line',
                    height: 350
                },
                series: [{
                    name: 'Temperatura',
                    data: temperatures
                }],
                xaxis: {
                    categories: timestamps,
                    type: 'datetime',
                    labels: {
                        formatter: function (value) {
                            // Formata o rótulo para mostrar apenas as horas
                            const date = new Date(value);
                            const hours = date.getHours();
                            const minutes = date.getMinutes();
                            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                        }
                    }
                },
            };

            var chart = new ApexCharts(document.querySelector("#temperaturaGrafico"), options);
            chart.render();
        })
        .catch(error => console.error('Erro ao obter dados do ThingSpeak:', error));
}

export async function umidadeGrafico() {

}

export async function pressaoGrafico() {
}

export async function luminosidadeGrafico() {
}


export function cleanGrafico() {
    
}