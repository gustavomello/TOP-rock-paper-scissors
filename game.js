function computerChose() {
    let i;
    i = Math.floor(Math.random() * 3);
    if (i === 0) {return 'Rock'} else if
    (i === 1) {return 'Paper'} else if
    (i === 2) {return 'Scissors'};
}
function playerChose(){
    let choice = prompt("Chose Rock, Paper or Scissors");
    choice = choice.toLowerCase()
    if (choice === 'rock') {return 'Rock'} else if
    (choice === 'paper') {return 'Paper'} else if
    (choice === 'scissors') {return 'Scissors'};
}
function playRound() {
    let playerSelection = playerChose()
    let computerSelection = computerChose()
    if (playerSelection === undefined){
        console.log('Player dumb, computer wins the round');
        return 'computerPoint'
    }
    console.log('Player chose ' + playerSelection)
    console.log('Computer chose ' + computerSelection)
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 'tie'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
            playerSelection === 'Paper' && computerSelection === 'Scissors' ||
            playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('Computer wins the round')
        return 'computerPoint'
    } else {
        console.log('Player wins the round')
        return 'playerPoint'
    }
 
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++)
    {   
        let roundNumber = i + 1;
        console.log('Round ' + roundNumber);
        let round = playRound();
        if (round === 'tie'){console.log('No points for anyone');
        console.log('Computer has ' + computerPoints + ' points.');
        console.log('Player has ' + playerPoints + ' points.')
        } else if (round === 'computerPoint'){
            computerPoints++;
            console.log('Computer has ' + computerPoints + ' points.');
            console.log('Player has ' + playerPoints + ' points.')
        } else if (round === 'playerPoint') {
            playerPoints++;
            console.log('Computer has ' + computerPoints + ' points.');
            console.log('Player has ' + playerPoints + ' points.')
        }

    }
    if (playerPoints === computerPoints) {console.log("The final winner is... nobody.")
} else if (playerPoints > computerPoints) {console.log("The final winner is Player")
} else {console.log("The final winner is Computer! I wish I could say it was a pleasure.")}

}
game()





