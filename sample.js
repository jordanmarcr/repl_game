const readlineSync = require('readline-sync'),
      input = readlineSync.question,
      responses = [];

function handle(response){      // "count with side-effect"
    responses.push(response);
    counter += 1;
    return counter;
}
const questions = [
    'first name',
    'last name',
    'age',
],
    length = questions.length - 1;

let counter = 0;
let prompter = () =>  handle(
	input(`What is your ${questions[counter]}? `)
) > length || prompter() ;
prompter() ;
console.log(responses);
