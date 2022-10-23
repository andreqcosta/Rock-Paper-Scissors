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
	return "draw";
    } else if (p === "rock" && c == "scissor" || p === "paper" && c === "rock" || p === "scissor" && c === "paper"){
	return "win";
    }else if (p === "rock" && c == "paper" || p === "paper" && c === "scissor" || p === "scissor" && c === "rock"){
	return "lose";
    }	
    
}

function game(e){
    selection = this.classList.value;
    let computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    let round = playRound(selection, computerSelection);
    
    if(round === "draw"){
	roundResult.textContent = `Draw! ${selection} is equal to ${computerSelection}`;
    }else if(round === "win"){
	player++;
	roundResult.textContent = `You win! ${selection} beats ${computerSelection}`;
    }else if(round === "lose"){
	computer++;
	roundResult.textContent = `You lose! ${computerSelection} beats ${selection}`;
    }	
    games++;
    if(games === 5){
	if(player > computer){
	    finalResult.textContent = `You win the game for ${player} to ${computer}`;
	}else if(player < computer){
	    finalResult.textContent = `You lose the game for ${computer} to ${player}`;
	}else if(player === computer){
	    finalResult.textContent = `The game is a draw for ${player} to ${computer}`;
	}
	games = 0;
	player = 0;
	computer =0;
    }else{
	finalResult.textContent = '';
    }

}


const playerSelection = document.querySelectorAll("button");
playerSelection.forEach(selection => selection.addEventListener("click", game));

const results = document.querySelector(".results");

const roundResult = document.createElement("div");
roundResult.classList.add("round");
results.appendChild(roundResult);

const finalResult = document.createElement("div");
finalResult.classList.add("final");
results.appendChild(finalResult);

let games = 0;
let player = 0;
let computer = 0;



