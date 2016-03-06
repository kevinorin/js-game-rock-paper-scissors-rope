/**************************************
 * JavaScript Game - Rock, Paper, Scissors, Rope  *
 ***************************************/

var consoleLine = "<p class=\"console-line\"></p>";

console = {
    log: function (text) {
        $("#arena").append(
            $(consoleLine).html(text));
    }
};    

// Users choice
var userChoice = prompt("Do you choose rock, paper or scissors?");

// AI choice
var aiChoice = Math.random();
if (aiChoice < 0.34) {
	aiChoice = "rock";
} else if(aiChoice <= 0.67) {
	aiChoice = "paper";
} else {
	aiChoice = "scissors";
} 

console.log("Computer chose: " + aiChoice);

// Outcome Library
var Outcomes = function (value1, value2, choice1, choice2) {
    if (value1 === choice1 && value2 === choice2) {
        return (true);
    } else if (value1 === choice2 && value2 === choice1) {
        return (true);
    }
    return (false);
}

// Possible Outcomes
var compare = function (choice1, choice2) {
    if (areThey("paper", "rock", choice1, choice2)) {
        return ("paper wins");
    } else if (areThey("paper", "scissors", choice1, choice2)) {
        return ("scissors wins");
    } else if (areThey("scissors", "rock", choice1, choice2)) {
        return ("rock wins");
    }
    return ("it's a tie!");
}

// Show Outcome
console.log(compare(userChoice, aiChoice));
