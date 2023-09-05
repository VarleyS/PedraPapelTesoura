const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result p");

choices.forEach(choice => {
    choice.addEventListener("click", playGame);
});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    displayResult(winner, computerChoice);
}

function getComputerChoice() {
    const choices = ["pedra", "papel", "tesoura"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if(player === computer) {
        return "Empate!";
    } else if ((player === "pedra" && computer === "tesoura") ||
        (player === "papel" && computer === "pedra") ||
        (player === "tesoura" && computer === "papel")) {
        return "Você venceu!";
    }else {
        return "Computador venceu!";
    }
}

function displayResult(winner, computerChoice) {
    result.textContent = `${winner} O computador escolheu ${computerChoice}.`;
}