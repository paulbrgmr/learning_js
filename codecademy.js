var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice >= 0 && computerChoice <= 0.34) {
    computerChoice = "rock";
} else if(computerChoice >= 0.35 && computerChoice <= 0.67) {
    computerChoice = "paper";
} else {(computerChoice >= 0.68 && computerChoice <= 1)
    computerChoice = "scissors";
}

var compare = function(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return "The result is a tie!"
    }
    else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return("rock wins");
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return ("paper wins");
        }
    }
}

console.log(userChoice, computerChoice);