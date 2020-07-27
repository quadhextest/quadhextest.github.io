window.onload = function () {
    Score();
    Hexagon();
}

function Score() {
    var Religious = 0;
    var Tradition = 0;
    var Respect = 0;
    var Control = 0;
    var Authority = 0;
    var Federation = 0;
    var Equality = 0;
    var Hardship = 0;
    var Charity = 0;
    var War = 0;
    var Seclusion = 0;
    var Isolation = 0;

    // var score = [Religious,Tradition,Respect,Control,Authority,Federation,Equality,Hardship,Charity,War,Seclusion,Isolation];
    var score = [0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i = 0; i <= 20; i++) {
        var questionString = questions[i].question;
        var scoreEffectMap = questions[i].score_effect;

        console.log(questionString);

        var scoreEffectArray = [];
        for (key in scoreEffectMap) {
            scoreEffectArray.push(scoreEffectMap[key]);
        }
        console.log(scoreEffectArray);

        for (let j = 0; j < 12; j++) {
            score[j] += scoreEffectArray[j];
        }
        console.log(score);
    }
}

function Hexagon() {
    var scores = [];
    var totalScore = 0;

    for (var i = 0; i < 33; i++) {
        var newScore = 50 * (Math.random() - Math.random());
        scores.push(newScore);
        totalScore += newScore;
    }

    var score = totalScore / 33;
    
    var line = Math.ceil(Math.random() * 3);

    document.getElementById("results").innerHTML = `Axis: ${line}<br>Total Score: ${totalScore}<br>Final Score: ${score}`;
    document.getElementById("scores").innerHTML = `Scores:<br>${scores.toString().replace(/,/g, "<br>")}`;

    var ctx = document.getElementById('graph').getContext('2d');

    var a = [-24, 22];
    var b = [-0.5, 47];
    var c = [23, 22.5];
    var ax = [23, -25];
    var bx = [-0.5, -49];
    var cx = [-24, -25];

    function scaleData(axis, w) {
        switch (axis) {
            case 1:
                var x = -47 * ((w + 50) / 100) + 23;
                var y = 47 * ((w + 50) / 100) - 25;
                break;
            case 2:
                var x = -0.5;
                var y = 96 * ((w + 50) / 100) - 49;
                break;
            case 3:
                var x = 47 * ((w + 50) / 100) - 24;
                var y = 47.5 * ((w + 50) / 100) - 25;
                break;
        }

        document.getElementById("results").innerHTML += `<br>Graph X-value: ${x}<br>Graph Y-value: ${y}`;

        return [{
            x: x,
            y: y
        }];
    }

    var hexagon = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#FF0000',
                pointBorderWidth: 20,
                backgroundColor: 'rgb(255, 99, 132)',
                data: scaleData(line, score)
            }]
        },

        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.xLabel.toFixed(2) + ", " + tooltipItem.yLabel.toFixed(2);
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        min: -50,
                        max: 50,
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                }],
                xAxes: [{
                    ticks: {
                        display: false,
                        min: -50,
                        max: 50,
                    },
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                }],
            },
        },
    });
};