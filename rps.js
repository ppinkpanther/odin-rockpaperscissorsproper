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
            console.log("You Win! Paper beats Rock");
            return true;
        } else {
            console.log("You Lose! Paper beats Rock"); 
            return false;
        }
    } else if (bothChoices.includes("rock") && bothChoices.includes("scissors")) {
        if (bothChoices[0] == "rock") {
           console.log("You Win! Rock beats Scissors");
           return true;
        } else {
           console.log("You Lose! Rock beats Scissors");
           return false;
        }
    } else if (bothChoices.includes("paper") && bothChoices.includes("scissors")) {
        if (bothChoices[0] == "scissors") {
            console.log("You Win! Scissors beats Paper");
            return true;
        } else {
            console.log("You Lose! Scissors beats Paper");
            return false;
        }
    } else {
        console.log("It's a tie!")
        return "tie";

    }
    
}

function playGame () {
    let playerWins = 0;
    let computerWins = 0;
    console.log(playerWins, computerWins);
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter choice: ").toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if(playRound(playerChoice, computerChoice)) {
            playerWins ++;
        }else if (!playRound(playerChoice, computerChoice)) {
            computerWins ++;
        }
        console.log(playerWins);
        console.log(computerWins);
    }
    
    
    if (playerWins > computerWins) {
        console.log('You Win! The score was: ' + playerWins + ' to ' + computerWins);
    }else if (playerWins < computerWins) {
        console.log('You Lose :(. The score was: ' + playerWins + ' to ' + computerWins);
    }else {
        console.log('You Tied! It was: ' + playerWins + ' to ' + computerWins);
    }
}


playGame();


    