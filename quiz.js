var currentQuestion = 0;
var questionNumber = 1;
const questionCount = 20;
var weights = [];

function start() {
    document.getElementById('home').style.display = "none";
    document.getElementById('quiz').style.display = "flex";
}

function skip() {
    weights = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    console.log(weights);

    document.getElementById('quiz').style.display = "none";
    document.getElementById('scores').style.display = "flex";
    return score();
}

function answer(weight) {
    var questionString = questions[currentQuestion].question;

    weights[currentQuestion] = weight;

    console.log(questionString);
    console.log(weight);
    console.log(weights);
}

function nextQuestion() {
    if (currentQuestion == questionCount) {
        if (weights.indexOf(undefined) != -1) {
            alert("You haven't answered all of the questions! Please answer all of the questions and try again.");
            return console.log(weights);
        } else {
            console.log(weights);

            document.getElementById('quiz').style.display = "none";
            document.getElementById('scores').style.display = "flex";
            return score();
        }
    } else if (currentQuestion == questionCount - 1) {
        document.getElementById("nextButton").innerHTML = "Submit";
        document.getElementById("nextButton").style.backgroundColor = "blue";
    }

    var questionString = questions[currentQuestion + 1].question;

    document.getElementById("questionText").innerHTML = questionString;
    document.getElementById("questionNumber").innerHTML = "Question #" + (questionNumber + 1);

    currentQuestion++;
    questionNumber++;
}

function previousQuestion() {
    if (currentQuestion == 0) {
        return;
    } else if (currentQuestion == questionCount) {
        document.getElementById("nextButton").innerHTML = "Next";
        document.getElementById("nextButton").style.backgroundColor = "rgb(37, 37, 37)";
    }

    var questionString = questions[currentQuestion - 1].question;

    document.getElementById("questionText").innerHTML = questionString;
    document.getElementById("questionNumber").innerHTML = "Question #" + (questionNumber - 1);

    currentQuestion--;
    questionNumber--;
}