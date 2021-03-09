const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, gallows } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  const wordSoFar = displayWordSoFar(word,guesses)
  console.log(wordSoFar)
  const letter = question("Raad een letter: ");
  
  // voeg de geraden letter toe aan de array met guesses

  guesses.push(letter);
  const wonSoFar = isGameWon(word, guesses);
  if(wonSoFar){
    console.log("Je hebt gewonnen!")
    return;
  }
  const isLost = isGameLost(word, guesses)
  if (isLost){
    console.log("Je hebt verloren!!!")
    return;
  }
  const isGallows = gallows(counter)


  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);

}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);


