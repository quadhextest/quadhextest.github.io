window.onload = function () {
    var ctx = document.getElementById('graph').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'scatter',

        data: {
            labels: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
            datasets: [{
                label: 'Your Score',
                backgroundColor: 'rgba(200, 100, 0, 0)',
                borderColor: 'rgb(255, 99, 132)',
                data: [1.1, 1.2, 1.3, 1.4, 1.5, 1.6],
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                }],
            },
        },
    });
};