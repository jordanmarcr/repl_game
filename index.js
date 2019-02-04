const readlineSync = require('readline-sync'),
      input = readlineSync.question,
      responses = [];


const maxScore = 2 //Change to see what the score should go up too
const gameOptions = {'1': rockPaperScissors } //Add based on game choices for variable -choice-

console.log( "\nWelcome to the game of mini games!");
console.log( `Scoring will be first to -${maxScore}-!`);
readlineSync.question ("\nPress [ENTER] to play!");
let userScore = 0;
let computerScore = 0;
let score = function(score1, score2) { return "\nUser: " + score1 + "\nComputer: " +score2+"\n"};

while (true) {
  console.log('\033c');
  //User chooses game
  let choice = readlineSync.question ("Enter number for game you'd like to play: \n\nRock, Papper, Scissors: [1]");

  //User picks choice which refers to gameOptions object (array)
  gameOptions[choice]();
  //Returns
  console.log(score(userScore, computerScore));
  readlineSync.question('Press [ENTER] to continue');

  if(userScore === maxScore) {break}
  if(computerScore === maxScore) {break}
}
//Game is over, show winner
userScore === maxScore ? console.log("\nUser Wins!!!\n"): console.log("\nComputer Wins!!!\n")



function rockPaperScissors(){
  //User makes a choice
  let uChoice = readlineSync.question ("\nChoose: \nRock - [r]\nPaper - [p]\nScissors-[s]");
  let uOptions = {'r': 'Rock', 'p': 'Paper', 's': 'Scissor'};

  let userRPS = uOptions[uChoice];

  // if(uOption === "r") {
  //   userRPS = "Rock";
  // } else if(uOption === "p") {
  //   userRPS = "Paper";
  // } else if(uOption === "s") {
  //   userRPS = "Scissors";
  // }

  //Randomizing Computer Choice
  let options = ['Rock', 'Paper', 'Scissor'];
  let computerRPS = options[Math.floor(Math.random() * options.length)];

  //Function comparing the hands, adding 1 to the winners score, then printing the winner
  let compare = function(choice1,choice2) {
      if (choice1 === choice2){
      return "It's a tie!";
     }

     if(choice1 === "Rock"){
       if (choice2 === "Scissor"){
        (userScore += 1);
        return "User wins with Rock!";
       } else {
         (computerScore += 1);
         return "Computer wins with Paper!";
       }
      }
      if(choice1 === "Paper"){
        if (choice2 === "Rock"){
          (userScore += 1);
          return "User wins with Paper!";
        } else {
          (computerScore += 1);
          return "Computer wins with Scissors!";
        }
      }
      if(choice1 === "Scissor"){
        if (choice2 === "Paper"){
          (userScore += 1);
          return "User wins with Scissors!";
        } else {
          (computerScore += 1);
          return "Computer wins with Rock!";
        }
      }
    }

  console.log("\nUser Choice: " + userRPS);
  console.log("Computer Choice: " + computerRPS+"\n");
  console.log(compare(userRPS, computerRPS));
}
