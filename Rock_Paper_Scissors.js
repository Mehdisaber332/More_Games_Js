const prompt = require("prompt-sync")();

let wins = 0; 
let losses = 0;
let ties = 0;

while(true) {
const choice = prompt("Enter rock, paper or scissors (or click q to quit)");
if (choice.toLowerCase() === "q" || choice.toLowerCase() === "quit") {
    break;
}

if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Please enter a valide choice:");
    continue;
}
const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() * 2);
const computer_choice = choices[randomIndex];
console.log("The computer chose: " + computer_choice + "!");

if (computer_choice === choice) {
    console.log("It's a draw !");
    ties++;
}
else if ((computer_choice === "rock" && choice === "paper") || 
(computer_choice === "paper" && choice === "scissors") || 
(computer_choice === "scissors" && choice === "rock")) {
    console.log("You won!");
    wins++;
} else {
    console.log("You lose!");
    losses++;
}
}

console.log("Wins:" + wins + "\n" + "Losses:" + losses + "\n" + "Ties:" + ties);