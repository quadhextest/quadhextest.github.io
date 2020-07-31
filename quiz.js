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
    if (currentQuestion == 20) {
        return;
    } else if (currentQuestion == 19) {
        document.getElementById("nextButton").innerHTML = "Submit";
        document.getElementById("nextButton").style.backgroundColor = "blue";
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