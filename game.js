const btn = document.querySelectorAll('button');
btn.forEach(btn => btn.addEventListener('click', event => {
    playRound(btn.textContent);
  }));

const tally = document.querySelector('.tally');
let computerPoints = 0;
let playerPoints = 0;


function computerChose() {
    let i;
    i = Math.floor(Math.random() * 3);
    if (i === 0) {return 'Rock'} else if
    (i === 1) {return 'Paper'} else if
    (i === 2) {return 'Scissors'};
}
function playRound(playerSelection) {
    let computerSelection = computerChose()
    //console.log('Player chose ' + playerSelection + ' and Computer chose ' + computerSelection)
    if (playerSelection === computerSelection) {
        // console.log("It's a tie!");
        //return 'tie'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
            playerSelection === 'Paper' && computerSelection === 'Scissors' ||
            playerSelection === 'Scissors' && computerSelection === 'Rock') {
        // console.log('Computer wins the round')
        computerPoints += 1;
        //return 'computerPoint'
    } else {
        // console.log('Player wins the round')
        playerPoints += 1;
        //return 'playerPoint'
    }
    tally.textContent = 'Computer ' + computerPoints +  ' vs Player ' + playerPoints;
    if(computerPoints === 5){
        tally.textContent = 'Computer has won ' + computerPoints +  ' to ' + playerPoints;
        computerPoints = 0;
        playerPoints = 0;
    }
    if (playerPoints === 5){
        tally.textContent = 'Player has won ' + playerPoints +  ' to ' + computerPoints;
        computerPoints = 0;
        playerPoints = 0;
    }
}

// function game(){
//     let playerPoints = 0;
//     let computerPoints = 0;
//     for (let i = 0; i < 5; i++)
//     {   
//         let roundNumber = i + 1;
//         console.log('Round ' + roundNumber);
//         let round = playRound();
//         if (round === 'tie'){console.log('No points for anyone');
//         } else if (round === 'computerPoint'){
//             computerPoints++;
//         } else if (round === 'playerPoint') {
//             playerPoints++;
//         }
//         console.log('Computer has ' + computerPoints + ' points.');
//         console.log('Player has ' + playerPoints + ' points.')

//     }
//     if (playerPoints === computerPoints) {console.log("The final winner is... nobody.")
// } else if (playerPoints > computerPoints) {console.log("The final winner is Player")
// } else {console.log("The final winner is Computer! I wish I could say it was a pleasure.")}

// }
// game()





