var currentQuestion = 0;
var weights = [];

function answer(weight) {
    var questionString = questions[currentQuestion].question;

    weights[currentQuestion] = weight;

    console.log(questionString);
    console.log(weight);
    console.log(weights);
}

function nextQuestion() {
    if (currentQuestion == 21) {
        return;
    }

    var questionString = questions[currentQuestion].question;

    document.getElementById("questionText").innerHTML = questionString;
    document.getElementById("questionNumber").innerHTML = "Question #" + (currentQuestion + 1);

    currentQuestion++;
}

function previousQuestion() {
    if (currentQuestion == 0) {
        return;
    }

    var questionString = questions[currentQuestion - 2].question;

    document.getElementById("questionText").innerHTML = questionString;
    document.getElementById("questionNumber").innerHTML = "Question #" + (currentQuestion - 1);

    currentQuestion--;
}