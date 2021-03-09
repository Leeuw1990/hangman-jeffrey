function displayWordSoFar(word, guesses) {
  // - [x] zet je testje op test.only (later weer weghalen)
  // - [x] loggen: wat is word, wat is guesses
  // - [x] javascript, ['a', 'b'] -> "_ _ _ _ _ _ _ _ _ _ "
  // - [x] javascript "splitten" split() -> ['j','a','v','a','s','c','r','i','p','t']
  // - [x] een loop maken -> ['j','a','v','a','s','c','r','i','p','t']
  // - [x] checken: zit de letter in guesses?
  // - [x] if else
  // - [x] zo nee: "_ "
  // - [x] zo ja: "j " (niet j, maar de letter die we dan checken)
  // - [x] klaar? -> onze string die we hebben gemaakt returnen
  let outPut = "";
  const letterArray = word.split("");
  for (let i = 0; i < letterArray.length; i++) {
    const letterWord = letterArray[i]
    const letterGuessed = guesses.includes(letterWord)
      //console.log(word)
      if (!letterGuessed){
        outPut = outPut + "_ ";
      }
      if (letterGuessed){
        outPut = outPut + letterWord + " ";
      }
    }
    return outPut;
}

function isGameWon(word, guesses) {
  // WRITE ME
  //DOEL:
  //word = "javascript" guesses ["j","a","v","a","s","c","r","i","p","t"
  const letterArray = word.split("")
  let outPut = "";
  for (let i = 0; i < letterArray.length; i++) {
    const letterWord = letterArray[i]
    const letterGuessed = guesses.includes(letterWord)
    if (letterGuessed) {
      outPut = outPut + letterWord;
    }
  }
  if (outPut === word){
    return true;
  } else {
    return false;
  }


}

function isGameLost(word, guesses) {
  // WRITE ME
  // DOEL:
// word = "javascript" guesses = ["q", "w", "e", "y", "u", "o", "d"]; -> true
// word = "javascript" guesses = ["q", "w", "e", "a", "t"]; -> false
// STRATEGIE:
// fouten tellen
// 7 fout (of meer?) -> return true
// minder dan 7 fout -> return false
// - [ ] for loop over de guesses
// - [ ] voor elke guess
// - [ ] counter aanmaken -> start bij 0
// - [ ] zit deze guess (letter) in het woord word.includes(guess)
// - [ ] if
// - [ ] Als true (we doen niets)
// - [ ] Als false "+ doen" -> counter met 1 verhogen
// - [ ] aan het eind van de functie if statement
// - [ ] if
// - [ ] count is 7 -> return true
// - [ ] count is minder dan 7 -> return false
  const lettersInWordArray = word.split("");
  counter = 0;

  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i]
    const isLetterGuessed = word.includes(guess)

    if (!isLetterGuessed) {
      counter = counter + 1;
    }
  }
    if (counter === 7){
      return true;
    } else{
      return false;
    }
}

function gallows(counter){
  if(counter === 1){
    console.log("|\n" +
        "|\n" +
        "|\n" +
        "|\n" +
        "|\n" +
        "===========")
  }
  if(counter === 2){
    console.log("----------\n"+
        "| /\n" +
        "|/\n" +
        "|\n" +
        "|\n" +
        "|\n" +
        "===========")
  }
  if (counter === 3){
    console.log("----------\n"+
        "| /              |\n" +
        "|/\n" +
        "|\n" +
        "|\n" +
        "|\n" +
        "===========")
  }
  if (counter === 4){
    console.log("----------\n"+
        "| /       |\n" +
        "|/        o\n" +
        "|\n" +
        "|\n" +
        "|\n" +
        "===========")
  }
  if (counter === 5){
    console.log("----------\n"+
        "| /       |\n" +
        "|/        o\n" +
        "|         0\n" +
        "|\n" +
        "|\n" +
        "===========")
  }
  if (counter === 6){
    console.log("----------\n"+
        "| /       |\n" +
        "|/        o\n" +
        "|       --0--\n" +
        "|\n" +
        "|\n" +
        "===========")
  }
  if (counter === 7) {
    console.log("----------\n"+
        "| /       |\n" +
        "|/        o\n" +
        "|       --0--\n" +
        "|        / |\n" +
        "|\n" +
        "===========")
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  gallows: gallows,
};
