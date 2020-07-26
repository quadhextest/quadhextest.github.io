window.onload = function () {
    var ctx = document.getElementById('graph').getContext('2d');

    var boundaries = [[-16.5, 41], [16.5, 41], [31, -1.5], [16.5, -44], [16.5, -44], [-32.2, -1.5]];

    var hexagon = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#FF0000',
                pointBorderWidth: 20,
                backgroundColor: 'rgb(255, 99, 132)',
                data: [{
                    x: 16.5,
                    y: -44
                }]
            }]
        },

        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // display: false,
                        min: -50,
                        max: 50,
                    },
                    // gridLines: {
                    //     display: false,
                    //     drawBorder: false,
                    // },
                }],
                xAxes: [{
                    ticks: {
                        // display: false,
                        min: -50,
                        max: 50,
                    },
                    // gridLines: {
                    //     drawBorder: false,
                    //     display: false,
                    // },
                }],
            },
        },
    });
};