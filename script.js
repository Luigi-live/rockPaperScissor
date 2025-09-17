let humanScore = 0;
let computerScore = 0;
let roundCounts = 0;

const humanSelection = getHumanChoise();
const computerSelection = getComputerChoise();

function getComputerChoise() {
    let computerChoise;
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber)
    if(randomNumber <= 33){
        computerChoise = "paper"
    }
    else if (66 < randomNumber) {
        computerChoise = "scissor"
    }
    else if (33 < randomNumber <= 66){
        computerChoise = "rock"
    }
    return computerChoise;
};

function getHumanChoise() {
    console.log("For this game, we have 3 options: ")
    console.log("1 - Paper")
    console.log("2 - Rock")
    console.log("3 - Scissor")
    let humanChoise = prompt("What is your choise:")
    while(humanChoise != "1" && humanChoise != "2" && humanChoise != "3"){
        humanChoise = prompt("Come on, don't be shy. Chose a number(1 or 2 or 3):")
    }
    if(humanChoise === "1"){
        humanChoise = "paper"
    }
    else if (humanChoise === "2"){
        humanChoise = "rock"
    }
    else if (humanChoise === "3"){
        humanChoise = "scissor"
    }
    return humanChoise
};

function playRound(humanSelection, computerSelection) {
    while(roundCounts != 5){    
        if (humanSelection === "paper") {
            if(computerSelection === "scissor"){
                computerScore ++;
            }
            else if(computerSelection === "rock") {
                humanScore ++;
            }
        }
        else if (humanSelection === "rock") {
            if(computerSelection === "paper"){
                computerScore ++;
            }
            else if(computerSelection === "scissor") {
                humanScore ++;
            }
        }
        else if (humanSelection === "scissor") {
            if(computerSelection=== "rock"){
                computerScore ++;
            }
            else if(computerSelection === "paper") {
                humanScore ++;
            }
        }
        console.log("Human Score: " + humanScore + "Computer Score: " + computerScore)
        roundCounts ++;
        humanSelection = getHumanChoise();
        computerSelection = getComputerChoise();
    }
    return("Human Score: " + humanScore + "Computer Score: " + computerScore)
}

console.log(playRound(humanSelection, computerSelection));