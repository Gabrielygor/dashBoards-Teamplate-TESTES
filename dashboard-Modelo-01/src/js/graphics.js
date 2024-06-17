import { optionId } from './script.js'

const quantidadeDeLeituras = 50 // 214 leituras é mais ou menos 1 hora 

export async function temperaturaGrafico() {
    fetch(`https://api.thingspeak.com/channels/${optionId}/fields/1.json?results=${quantidadeDeLeituras}`)
        .then(response => response.json())
        .then(data => {
            const temperatures = data.feeds.map(feed => parseFloat(feed.field1));
            const timestamps = data.feeds.map(feed => feed.created_at);

            var options = {
                chart: {
                    type: 'line',
                    height: 500
                },
                series: [{
                    name: 'Temperatura',
                    data: temperatures
                }],
                colors: ['#DC143C'], 

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
                        },

                        style: {
                            colors: 'var(--bg-eixos-graficos)', // Define a cor da fonte dos rótulos
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                },

                yaxis: {
                    labels: {
                        style: {
                            colors: 'var(--clr-scrollbar)', // Define a cor da fonte do eixo y
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                }
            };

            var chart = new ApexCharts(document.querySelector("#temperaturaGrafico"), options);
            chart.render();
        })
        .catch(error => console.error('Erro ao obter dados do ThingSpeak:', error));

        console.log("Atualizou");
}

export async function umidadeGrafico() {
    fetch(`https://api.thingspeak.com/channels/${optionId}/fields/2.json?results=${quantidadeDeLeituras}`)
        .then(response => response.json())
        .then(data => {
            const umidade = data.feeds.map(feed => parseFloat(feed.field2));
            const timestamps = data.feeds.map(feed => feed.created_at);

            var options = {
                chart: {
                    type: 'line',
                    height: 350
                },
                series: [{
                    name: 'Umidade %',
                    data: umidade
                }],
                colors: ['#4169E1'], 
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
                        },
                        style: {
                            colors: 'var(--bg-eixos-graficos)', // Define a cor da fonte dos rótulos
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: 'var(--clr-scrollbar)', // Define a cor da fonte do eixo y
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                }
            };

            var chart = new ApexCharts(document.querySelector("#umidadeGrafico"), options);
            chart.render();
        })
        .catch(error => console.error('Erro ao obter dados do ThingSpeak:', error));
}

export async function pressaoGrafico() {
    fetch(`https://api.thingspeak.com/channels/${optionId}/fields/3.json?results=${quantidadeDeLeituras}`)
        .then(response => response.json())
        .then(data => {
            const umidade = data.feeds.map(feed => parseFloat(feed.field3));
            const timestamps = data.feeds.map(feed => feed.created_at);

            var options = {
                chart: {
                    type: 'line',
                    height: 200
                },
                series: [{
                    name: 'Pressão',
                    data: umidade
                }],
                colors: ['#00FF00'], 

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
                        },
                        style: {
                            colors: 'var(--bg-eixos-graficos)', // Define a cor da fonte dos rótulos
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: 'var(--clr-scrollbar)', // Define a cor da fonte do eixo y
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                }
            };

            var chart = new ApexCharts(document.querySelector("#pressaoGrafico"), options);
            chart.render();
        })
        .catch(error => console.error('Erro ao obter dados do ThingSpeak:', error));
}

export async function luminosidadeGrafico() {
    fetch(`https://api.thingspeak.com/channels/${optionId}/fields/4.json?results=${quantidadeDeLeituras}`)
        .then(response => response.json())
        .then(data => {
            const umidade = data.feeds.map(feed => parseFloat(feed.field4));
            const timestamps = data.feeds.map(feed => feed.created_at);

            var options = {
                chart: {
                    type: 'line',
                    height: 200
                },
                series: [{
                    name: 'Luminosidade',
                    data: umidade
                }],
                colors: ['#FFD700'], 

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
                        },
                        style: {
                            colors: 'var(--bg-eixos-graficos)', // Define a cor da fonte dos rótulos
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: 'var(--clr-scrollbar)', // Define a cor da fonte do eixo y
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 400
                        }
                    }
                }
            };

            var chart = new ApexCharts(document.querySelector("#luminosidadeGrafico"), options);
            chart.render();
        })
        .catch(error => console.error('Erro ao obter dados do ThingSpeak:', error));
}


export function cleanGrafico() {
    const graficosDivs = document.querySelectorAll('#temperaturaGrafico, #umidadeGrafico, #pressaoGrafico, #luminosidadeGrafico ');
    graficosDivs.forEach(div => {
        div.innerHTML = '';
    });
}