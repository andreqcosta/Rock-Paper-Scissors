function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    
    const p = playerSelection.toLowerCase();
    const c = computerSelection.toLowerCase();
    console.log(p);
    console.log(c);
    if (p === c) {
	alert("draw")
	return "draw";
    } else if (p === "rock" && c == "scissor" || p === "paper" && c === "rock" || p === "scissor" && c === "paper"){
	return "win";
	alert("win")
    }else if (p === "rock" && c == "paper" || p === "paper" && c === "scissor" || p === "scissor" && c === "rock"){
	return "lose";
	alert("lose")
    }	
    
}


const playerSelection = document.querySelectorAll("button");
playerSelection.forEach(selection => selection.addEventListener("click", () =>{
    playRound(selection.classList.value, getComputerChoice());
} ));
const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    alert("rock")
});

function game(){
    let games = 0;
    let player = 0;
    let computer = 0;
    
    for(let i = 0; i < 5; i++){
	let playerSelection = prompt("Rock, paper or scissor?");
	let computerSelection = getComputerChoice();
	let round = playRound(playerSelection, computerSelection);
	
	if(round === "draw"){
	    console.log(`Draw! ${playerSelection} is equal to ${computerSelection}`);
	}else if(round === "win"){
	    player++;
	    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
	}else if(round === "lose"){
	    computer++;
	    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
	}	
	games++;
    }

    if(player > computer){
	console.log(`You win the game for ${player} to ${computer}`);
    }else if(player < computer){
	console.log(`You lose the game for ${computer} to ${player}`);
    }else if(player === computer){
	console.log(`The game is a draw for ${player} to ${computer}`);
    }

}



