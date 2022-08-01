var startQuizButton = document.querySelector("#start-quiz-btn");
startQuizButton.addEventListener("click", startQuizBtn);
var timerSection = document.getElementById("timer-section");
var questionSection = document.getElementById("question-section");
var scoreSection = document.getElementById("score-section");
var mainEl = document.getElementById("main");
var timerSpan = document.getElementById("timer");
var questionAns = document.getElementById("questionAnswer");
var submitButton = document.getElementById("submitbtn");
submitButton.addEventListener("click", submitScore);
var nameInput = document.getElementById("name-Input");

var timer = 30;
var timerInterval;

function updateTime() {
  // reduce by 1
  timer--;
  // update or render
  timerSpan.textContent = timer;
  // if 0 stop
  if (timer <= 0) {
    clearInterval(timerInterval);
    quizEnd();
  }
}

function startQuizBtn() {
  //remove section
  var startQuizSection = document.getElementById("start-quiz-section");
  startQuizSection.remove();

  //render question and answer
  questionSection.style.display = "block";
  //start timer //

  // show time
  timerSection.style.display = "block";
  // initialise the timer
  timerSpan.textContent = timer;

  timerInterval = setInterval(updateTime, 1000);
  displayQuestion();
}

var questions = [
  {
    title: "Which number is the largest?",
    choice: ["10", "5", "3"],
    correctAns: "10",
  },
  {
    title: "Which one is an Animal?",
    choice: ["Pencil", "Cat", "Neither"],
    correctAns: "Cat",
  },
  {
    title: "Was this quiz easy?",
    choice: ["No", "Yes", "I want to escape this quiz"],
    correctAns: "Yes",
  },
];
var questionIndex = 0;

function displayQuestion() {
  // selecting qustion 1 by 1
  var question = questions[questionIndex];
  // dynamically generate it
  document.getElementById("question-title").textContent = question.title;
  var buttons = document.getElementsByClassName("option");
  for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.textContent = question.choice[index];
    // add event listner
    element.addEventListener("click", checkAnswer);
  }
}

function quizEnd() {
  questionAns.style.display = "none";
  scoreSection.style.display = "block";
  timeTaken = timer;
  localStorage.setItem("timetaken", timeTaken);
  console.log(timer);
  //take user to form which will be saved in local storage and high scores page
}

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
  if (timer <= 0 || questionIndex === questions.length) {
    quizEnd();
  } else {
    displayQuestion();
  }
}

function getScore() {
  var nameSubmitted = nameInput.value;
  var newScores = {
    name: nameSubmitted,
    time: timeTaken,
  };
  let previousScore = JSON.parse(localStorage.getItem("new-score")) || [];
  previousScore.push(newScores);
  localStorage.setItem("new-score", JSON.stringify(previousScore));
}

function submitScore(event) {
  event.preventDefault;
  var nameSubmitted = nameInput.value;
  localStorage.setItem("name", nameSubmitted);
  location.href("/highscores.html");

  getScore();
}
