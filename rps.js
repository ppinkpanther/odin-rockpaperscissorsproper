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
    let playerChoiceLower = playerChoice.toLowerCase();
    const bothChoices = [playerChoiceLower, computerChoice];
    console.log(bothChoices);

    if (bothChoices.includes('rock') && bothChoices.includes('paper')) {
        if (bothChoices[0] == 'paper') {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Paper beats Rock"; 
        }
    } else if (bothChoices.includes("rock") && bothChoices.includes("scissors")) {
        if (bothChoices[0] == "rock") {
           return "You Win! Rock beats Scissors";
        } else {
           return "You Lose! Rock beats Scissors";
        }
    } else if (bothChoices.includes("paper") && bothChoices.includes("scissors")) {
        if (bothChoices[0] == "scissors") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else {
        return "Its a Tie!";
    }
    
}

const playerChoice = "rOck";
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));



    