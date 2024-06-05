const channelId = '1293177';
const numReadings = 600;

function fetchData() {
    fetch(`https://api.thingspeak.com/channels/${channelId}/feeds.json?results=${numReadings}`)
        .then(response => response.json())
        .then(data => {
            const feeds = data.feeds;
            const temperatures = feeds.map(feed => parseFloat(feed.field1));
            const timestamps = feeds.map(feed => new Date(feed.created_at));
            displayData(temperatures);
            updateChart(temperatures, timestamps);
        })
        .catch(error => {
            console.error('Erro ao recuperar os dados:', error);
        });
}
