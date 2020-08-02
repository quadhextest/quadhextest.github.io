window.onload = function () {
    if (!window.location.toString().includes("test")) {
        document.getElementById("home").style.marginTop = "70px";
    }
}

function score() {
    var scores = [0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i = 0; i <= questionCount; i++) {
        var weight = weights[i];

        var scoreEffectMap = questions[i].score_effect;
        var scoreEffectArray = [];

        for (key in scoreEffectMap) {
            scoreEffectArray.push(scoreEffectMap[key]);
        }

        for (let j = 0; j < 12; j++) {
            scores[j] += weight * scoreEffectArray[j];
            console.log(weight, scoreEffectArray[j], scores[j]);
        }
    }

    console.log(scores);

    const max = [0, 300, 150, 150, -50, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 12; i++) {
        if (max[i] == 0) {
            scores[i] = 0;
        } else {
            scores[i] = 50 * scores[i] / max[i];
        }
    }

    console.log(scores);

    if (scores.indexOf(undefined) == -1 || scores.indexOf(NaN) == -1) {
        Hexagon("graph0", scores[0], scores[1], scores[2]);
        Hexagon("graph1", scores[3], scores[4], scores[5]);
        Hexagon("graph2", scores[6], scores[7], scores[8]);
        Hexagon("graph3", scores[9], scores[10], scores[11]);
    } else {
        Hexagon("graph0", "random", "random", "random");
        Hexagon("graph1", "random", "random", "random");
        Hexagon("graph2", "random", "random", "random");
        Hexagon("graph3", "random", "random", "random");

        console.log("Error occurred");
        console.log(scores);
        console.log(scores.indexOf(undefined));
    }
}

function Hexagon(id, s1, s2, s3) {
    if (s1 == "random" && s2 == "random" && s3 == "random") {
        var s1 = generateScores();
        var s2 = generateScores();
        var s3 = generateScores();
    }

    var result = combineScores(s1, s2, s3);
    console.log(id, result);

    var a = [{ x: -24, y: 22}];
    var b = [{ x: -0.5, y: 47}];
    var c = [{ x: 23, y: 22.5}];
    var ax = [{ x: 23, y: -25}];
    var bx = [{ x: -0.5, y: -49}];
    var cx = [{ x: -24, y: -25 }];
    
    var pointer = new Image();
    pointer.src = 'crosshair.png';

    var ctx = document.getElementById(id).getContext('2d');

    let hexagon = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#FF0000',
                pointStyle: pointer,
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

    console.log(s1, s2, s3, "|", ss1, ss2, ss3);

    var ax = ss1[0];
    var ay = ss1[1];
    var bx = ss2[0];
    var by = ss2[1];
    var cx = ss3[0];
    var cy = ss3[1];

    var d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));

    if (d == 0 && ax == bx && bx == cx && ax == cx) {
        var ux = ax;
        var uy = (ay + by + cy)/3;
    } else if (d == 0) {
        console.error("Error occurred, d == 0 but ax, bx, and cx are not equal.");
        console.log(ax, bx, cx);

        return [{
            x: 0,
            y: 0
        }];
    } else {
        var ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
        var uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
    }

    return [{
        x: ux,
        y: uy
    }];
}