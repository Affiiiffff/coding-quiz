var highscoreNames = document.getElementById("names");
var timeTaken = document.getElementById("scoresdiv");
var displayScore = JSON.parse(localStorage.getItem("new-score"));
var namesList = "";
var scoresList = "";
for (let i = 0; i < displayScore.length; i++) {
  namesList += displayScore[i].name;
  scoresList += displayScore[i].time;
}

highscoreNames.textContent = namesList;
timeTaken.textContent = scoresList;
console.log(displayScore); // not working
