var startQuizButton = document.querySelector("#start-quiz-btn");
startQuizButton.addEventListener("click", startQuizBtn);
var timerSection = document.getElementById("timer-section");
var questionSection = document.getElementById("question-section");

function startQuizBtn() {
  //remove section
  var startQuizSection = document.getElementById("start-quiz-section");
  startQuizSection.remove();

  //start timer //

  //build timer section

  var timerContainer = document.createElement("p");
  timerSection.textContent = "Time remaining : 60 ";
  timerSection.appendChild(timerContainer);

  //build question section
  var questionContainer = document.createElement("h1");
  questionSection.textContent = "Which number is the greatest? ";
  questionSection.appendChild(questionContainer);

  //build answer section
  var li1 = document.createElement("li");
  li1.textContent = "10";
  document.body.children[1].children[2].appendChild(li1);
}
console.log(document.body.children[1].children[2]);
