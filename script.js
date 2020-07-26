window.onload = function () {
    var ctx = document.getElementById('graph').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#FF0000',
                pointBorderWidth: 20,
                backgroundColor: 'rgb(255, 99, 132)',
                data: [{
                    x: 13,
                    y: 39
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