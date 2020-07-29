var currentQuestion = 0;
var questionNumber = 1;
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

    var questionString = questions[currentQuestion + 1].question;

    document.getElementById("questionText").innerHTML = questionString;
    document.getElementById("questionNumber").innerHTML = "Question #" + (questionNumber + 1);

    currentQuestion++;
    questionNumber++;

    console.log(currentQuestion, questionNumber);
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
    
    console.log(currentQuestion, questionNumber);
}