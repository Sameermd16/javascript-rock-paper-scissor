const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("user_choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e)=> {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissor"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (userChoice === "paper" && computerChoice === "rock"){
        result = "You win!"
    }
    if (computerChoice === "rock" && userChoice === "scissor") {
        result = "You lost!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose!"
    }
    if (computerChoice === "paper" && userChoice === "scissor") {
        result = "You win!"
    }
    if (computerChoice === "scissor" && userChoice === "paper") {
        result = "You lose!"
    }
    if (computerChoice === "scissor" && userChoice === "rock") {
        result = "You win!"
    }
    resultDisplay.innerHTML = result
}