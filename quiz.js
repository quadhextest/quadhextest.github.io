var currentQuestion = 0;
var questionNumber = 1;
var questionCount = 20;
var weights = [];

function start() {
    document.getElementById('home').style.display = "none";
    document.getElementById('quiz').style.display = "flex";
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
        if (weights.contains(null)) {
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
    }

    var questionString = questions[currentQuestion - 1].question;

    document.getElementById("questionText").innerHTML = questionString;
    document.getElementById("questionNumber").innerHTML = "Question #" + (questionNumber - 1);

    currentQuestion--;
    questionNumber--;
}