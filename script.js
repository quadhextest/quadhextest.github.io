window.onload = function () {
    Score();
    Hexagon("graph0");
    Hexagon("graph1");
    Hexagon("graph2");
    Hexagon("graph3");
}

function Score() {
    var score = [0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i = 0; i <= 20; i++) {
        var questionString = questions[i].question;
        var scoreEffectMap = questions[i].score_effect;

        var scoreEffectArray = [];

        for (key in scoreEffectMap) {
            scoreEffectArray.push(scoreEffectMap[key]);
        }

        var seed = Math.floor(5 * Math.random());
        var weight = [-1, -0.5, 0, 0.5, 1][seed]; // later replace this with a weight array in function params that is based off of user answers

        for (let j = 0; j < 12; j++) {
            score[j] += weight * scoreEffectArray[j]; // weight[j] (array of weights based off of user answers)
        }

        // console.log("Question:", questionString);
        // console.log("Score Effect:", scoreEffectArray);
        // console.log("Weight:", weight);
        // console.log("New Score Array:", score);
        // console.log("---------");
    }
}

function Hexagon(id) {
    var s1 = generateScores();
    var s2 = generateScores();
    var s3 = generateScores();

    var result = combineScores(s1, s2, s3);
    console.log(id, result[0]);

    var a = [-24, 22];
    var b = [-0.5, 47];
    var c = [23, 22.5];
    var ax = [23, -25];
    var bx = [-0.5, -49];
    var cx = [-24, -25];

    var ctx = document.getElementById(id).getContext('2d');

    let hexagon = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#FF0000',
                pointBorderWidth: 20,
                backgroundColor: 'rgb(255, 99, 132)',
                data: result
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

function generateScores() {
    var scores = [];
    var totalScore = 0;

    for (var i = 0; i < 33; i++) {
        var newScore = 50 * (Math.random() - Math.random());
        scores.push(newScore);
        totalScore += newScore;
    }

    var score = totalScore / 33;

    return score;
}

function scaleScores(axis, w) {
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

    return [x, y];
}

function combineScores(s1, s2, s3) {
    var ss1 = scaleScores(1, s1);
    var ss2 = scaleScores(2, s2);
    var ss3 = scaleScores(3, s3);

    var ax = ss1[0];
    var ay = ss1[1];
    var bx = ss2[0];
    var by = ss2[1];
    var cx = ss3[0];
    var cy = ss3[1];

    var d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
    var ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
    var uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;

    return [{
        x: ux,
        y: uy
    }];
}