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
}

function playRound(playerChoice, computerChoice) {
    playerChoice.toLowerCase();
    let playerWin = false;
    const bothChoices = [playerChoice, computerChoice];

    if (bothChoices.includes('rock') && bothChoices.includes('paper')) {
        if (bothChoices[0] == 'paper') {
            playerWin = true;
        }
    } else if (bothChoices.includes("rock") && bothChoices.includes("scissors")) {
        if (bothChoices[0] == "rock") {
            playerWin = true;
        }
    } else if (bothChoices.includes("paper") && bothChoices.includes("scissors")) {
        if (bothChoices[0] == "scissors") {
            playerWin = true;
        }
    } else {
        playerWin = 'tie';
    }
    
}

getComputerChoice();


    // Take playerChoice and computerChoice
    // Check who is the winner between the two
        // IF rock && scissors, rock wins
        // IF rock && paper, paper wins
        // IF paper && scissors, scissors wins
    // Check whether the winner was the computer or the player
        // | Could add a tag onto the back of each ? maybe in if/else use slice to remove tag and do direct comparison, then use slice in the opposite direction to check only tag | DOES NOT WORK

        // PROBLEM: Correlating the contents of the string with the variable they came from. SOLUTIONS: Maybe could set a variable to be the winning string, then compare ONLY the winner with both playerChoice and computerChoice. Whichever one matches gets the point.
            
    // REVISED: 
    // ADD variable winner
    // Check who is the winner between the two
        // IF rock && scissors, rock wins
            //SET winner to equal rock
            //IF winner equals playerChoice, set playerWin to true
            //Log in console the result
        // IF rock && paper, paper wins
            //SET winner to equal paper
            //IF winner equals playerChoice, set playerWin to true
            //Log in console the result
        // IF paper && scissors, scissors wins
            //SET winner to equal scissors
            //IF winner equals playerChoice, set playerWin to true
            //Log in console the result
        // ELSE tie, return "tie"
    //RETURN playerWin

    //PROBLEM: Requires doubled code to check whether player or computer wins, defeats the point of original solution. SIMPLIFY: Need to get the playerChoice and computerChoice variables as absolutes, ie neither is linked to seperate variables so we can do a direct comparison. Could convert to ints and use comparison operators? Seems like same quantity of code. SOLUTION: Could instead start by doing a check to see what playerChoice is, then nest switch statement to decide who wins? Still high quantity of repeat code, but easier to work with and understand.

    // REVISED:
    // IF playerChoice is rock
        // CASE computerChoice is paper
            //BREAK
        // CASE computerChoice is scissors
            //SET playerWin to true
            //BREAK
        // DEFAULT SET playerWin to 'tie'
    // Repeat for all player options
    //RETURN playerWin

    // NOTE: Must be a more efficient way to run this, maybe combining both strings to an array, and checking to see which pair is present? ie., if rock and scissors are the two strings in the array, then run a check to see which position 'rock' is. Consistently place the computerChoice and playerChoice in the array, as in playerChoice at index 0 every time. That way, you would then run a single check on each case to see if the winning item is in players index. If yes, change playerWin to true! 
    // PSEUDOCODE: 
    // Create an array, and fill with both playerChoice and computerChoice
    // IF array contains rock and scissors
        //IF 0 index of array contains rock
            //SET playerWin to true
        //ELSE BREAK
    // Repeat for all cases
    //RETURN playerWin

   