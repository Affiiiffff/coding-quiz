var startQuizButton = document.querySelector("#start-quiz-btn");
startQuizButton.addEventListener("click", startQuizBtn);
var timerSection = document.getElementById("timer-section");
var questionSection = document.getElementById("question-section");
var timerSpan = document.getElementById("timer");
var timer = 60;
var timerInterval;

function updateTime() {
  // reduce by 1
  timer--;
  // update or render
  timerSpan.textContent = timer;
  // if 0 stop
  if (timer <= 0) {
    clearInterval(timerInterval);
  }
}

function startQuizBtn() {
  //remove section
  var startQuizSection = document.getElementById("start-quiz-section");
  startQuizSection.remove();

  //start timer //

  //build timer section
  // var timerDiv = document.createElement("div");
  // timerDiv.textContent = "The time you have remaining is : ";
  // var time = 60;
  // var timerSpan = document.createElement("span");
  // timerSpan.textContent = time;
  // timerDiv.appendChild(timerSpan);
  // document.body.children[1].children[0].appendChild(timerDiv);

  // show time
  timerSection.style.display = "block";
  // initialise the timer
  timerSpan.textContent = timer;

  timerInterval = setInterval(updateTime, 1000);
  displayQuestion();
}

var questions = [
  {
    title: "Question 1?",
    choice: ["option 1", "option 2"],
    correctAns: "option 1",
  },
  {
    title: "Question 2?",
    choice: ["option 1", "option 2"],
    correctAns: "option 1",
  },
  {
    title: "Question 3?",
    choice: ["option 1", "option 2"],
    correctAns: "option 1",
  },
];
var questionIndex = 0;

function displayQuestion() {
  // selecting qustion 1 by 1
  var question = questions[questionIndex];
  // dynamicall generate it
  document.getElementById("question-title").textContent = question.title;
  var buttons = document.getElementsByClassName("option");
  for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.textContent = question.choice[index];
    // add event listner
    element.addEventListener("click", checkAnswer);
  }
}

function quizEnd() {}

function checkAnswer(event) {
  // compare two things
  // 1. correct
  var question = questions[questionIndex];
  var correctAns = question.correctAns;
  // 2. user clicked value
  if (correctAns === event.target.textContent) {
    console.log("correct");
  } else {
    console.log("incorrect");
    timer -= 10;
  }
  // handling for last
  questionIndex++;
  displayQuestion();
}

// var questionDiv = document.createElement("div");
// questionDiv.textContent = "which number is the lowest? ";
// document.body.children[1].appendChild(questionDiv);

console.log(document.body.children[1].children[1]);
