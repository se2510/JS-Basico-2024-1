
const computerChoiceDiplay = document.getElementById('pc-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

let userChoice;
let computerChoice;
let result;

// Estamos obteninedo todas las posibles opciones de todos los botones
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    //console.log(randomNumber);

    if( randomNumber === 1){
        computerChoice = 'rock';
    }
    if( randomNumber === 2){
        computerChoice = 'paper';
    }
    if( randomNumber === 3){
        computerChoice = 'scissors';
    }
    computerChoiceDiplay.innerText = computerChoice;
}

function getResult(){
    if ( computerChoice === userChoice ){
        result = "EMPATE!! :B";
    }

    if ( (computerChoice == 'rock' && userChoice === 'paper') 
        || (computerChoice == 'paper' && userChoice === 'scissors')
        || (computerChoice == 'scissors' && userChoice === 'rock')){
        result = "GANAMOS! :D";
    }
    if ( (computerChoice == 'rock' && userChoice === 'scissors') || 
        (computerChoice == 'scissors' && userChoice === 'paper') || 
        (computerChoice == 'paper' && userChoice === 'rock')){
        result = "PERDIMO! :C";
    }
    resultDisplay.innerText = result;
}