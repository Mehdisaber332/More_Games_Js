const prompt = require("prompt-sync")();

console.log("Welcome to our Quiz!");

let correct_answers = 0;
const total_questions = 3;

const answer1 = prompt("What is the capital of Morocco: ");
const correct_answer1 = "RABAT";
if (answer1.toUpperCase() === correct_answer1) {
    console.log("Correct!");
    correct_answers++  
}
else {
    console.log("Wrong!");
}

const answer2 = prompt("Is JavaScript a programming language?(Yes/no): ");
const correct_answer2 = "yes";
if (answer2.toLowerCase() === correct_answer2) {
    console.log("Correct!");
    correct_answers++
}
else {
console.log("Wrong!");
}

const answer3 = prompt("Who is the winner of the ballon d'or 2023?: ");
const correct_answer3 = "messi";
if (answer3.toLowerCase() === correct_answer3) {
    console.log("Correct!");
    correct_answers++
}
else {
console.log("Wrong!");
}
const percent = Math.round((correct_answers/total_questions)*100);

console.log("You got", correct_answers, "questions correct!");
console.log("You score", percent.toString() + "%!");
