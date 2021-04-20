//Game variables
let playerScore = 0;
let computerScore = 0;
let totalWins = 5;
let totalRounds = 0;


//Get elements to alter content
let roundInfo = document.getElementById("round-info");
let playerScoreboard = document.getElementById("player-score");
let computerScoreboard = document.getElementById("computer-score");


//Generates a random choice for CPU
function computerPlay(){
    let items = ["rock", "paper", "scissors"];
    let computerSelection = items[Math.floor(Math.random() * items.length)];
    return  computerSelection;
}

//Plays one round of RPS and logs and updates the scores accordingly
function playRound(playerSelection, computerSelection){
        if(playerSelection == computerSelection){
            roundInfo.textContent = "It's a draw";
            }
            else if(playerSelection == "rock" && computerSelection =="scissors" ||
                    playerSelection == "paper" && computerSelection =="rock" ||
                    playerSelection == "scissors" && computerSelection =="paper")
                    {
                        roundInfo.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
                        playerScore++;
                        playerScoreboard.textContent = playerScore;
                    }
            else{
                roundInfo.textContent = `You lose! ${playerSelection} gets beaten by ${computerSelection}.`;
                computerScore++;
                computerScoreboard.textContent = computerScore;
            }  
}

function checkWinner(){
    let winner;
    if (computerScore==totalWins){
        winner = "Computer";
    }
    else if(playerScore==totalWins){
        winner = "Player";    
    }
    return winner;
}

function game(e){
    if(playerScore < totalWins && computerScore < totalWins){
        playRound(e.target.id, computerPlay());
    }
    else{
        roundInfo.textContent = `The game is over! ${checkWinner()} is victorious!`;
    }

}

const btns = Array.from(document.querySelectorAll(".play-button"));
btns.forEach(btn => btn.addEventListener("click", game));

