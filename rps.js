//Original logic

let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    console.log(choice)
    switch (choice) {
        case 0 :
            choice = "scissors";
            break;
        case 1 : 
            choice = 'rock';
            break;
        case 2 : 
            choice = 'paper';
            break;
        default : 
            console.log ('Uh oh');
    }
    console.log(choice);
    return choice;
}

function playRound(playerChoice, computerChoice) {
    const bothChoices = [playerChoice, computerChoice];
    let winner = findWinner(bothChoices);
    if(winner == 'win'){
        playerWins ++;
        displayWinner.textContent = 'You win! ${bothChoices[0]} beats ${bothChoices[1]}.';
    }else if(winner == 'loss'){
        computerWins ++;
        displayWinner.textContent = 'You lose! ${bothChoices[1]} beats ${bothChoices[0].}';
    }

    displayScore.textContent = 'Computer: ${computerWins} | Player: ${playerWins}';

    if(computerWins == 5){
        displayWinner.textContent = 'Game Over! You lost!';
    }else if(playerWins == 5){
        displayWinner.textContent = 'Game Over! You won!';
    }

    buttons.forEach(button => button.textContent = 'RESET');
    return;
}

function findWinner(choicesArray){
    if (choicesArray.includes('rock') && choicesArray.includes('paper')) {
        if (choicesArray[0] == 'paper') {
            return 'win';
        } else {
            return 'loss';
        }
    } else if (choicesArray.includes("rock") && choicesArray.includes("scissors")) {
        if (choicesArray[0] == "rock") {
           return 'win';
        } else {
           return 'loss';
        }
    } else if (choicesArray.includes("paper") && choicesArray.includes("scissors")) {
        if (choicesArray[0] == "scissors") {
            return 'win';
        } else {
            return 'loss';
        }
    } else {
        return "tie";

    }

}

//UI
const options = document.querySelector('#options');
const buttons = document.querySelectorAll('button');
const chooseRock = document.querySelector('#rock');
const choosePaper = document.querySelector('#paper');
const chooseScissors = document.querySelector('#scissors');
const textDisplay = document.querySelector('#textDisplay');
const displayScore = document.querySelector('#score');
const displayWinner = document.querySelector('div > p');


let playerOption = ''; 

options.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id){
        case 'rock':
            playerOption = 'rock';
            break;
        case 'paper': 
            playerOption = 'paper';
            break;
        case 'scissors':
            playerOption = 'scissors';
            break;
    }
    console.log(playerOption);

    if(playerWins < 5 && computerWins < 5){
        playRound(playerOption, getComputerChoice());
    }else{
        playerWins = 0;
        computerWins = 0;
    }


})


// function playGame () {
//     let playerWins = 0;
//     let computerWins = 0;
//     console.log(playerWins, computerWins);
//     for (let i = 0; i < 5; i++) {
//         const playerChoice = prompt("Enter choice: ").toLowerCase();
//         const computerChoice = getComputerChoice();
//         console.log(playRound(playerChoice, computerChoice));
//         if(playRound(playerChoice, computerChoice)) {
//             playerWins ++;
//         }else if (!playRound(playerChoice, computerChoice)) {
//             computerWins ++;
//         }
//         console.log(playerWins);
//         console.log(computerWins);
//     }
    
    
//     if (playerWins > computerWins) {
//         console.log('You Win! The score was: ' + playerWins + ' to ' + computerWins);
//     }else if (playerWins < computerWins) {
//         console.log('You Lose :(. The score was: ' + playerWins + ' to ' + computerWins);
//     }else {
//         console.log('You Tied! It was: ' + playerWins + ' to ' + computerWins);
//     }
// }


// playGame();


    