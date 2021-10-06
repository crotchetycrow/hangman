class Hangman {
  constructor() {
    this.secretWord = "";
    this.numberOfGuesses = 0;
    this.isInProgress = false;
    this.incorrectGuesses = [];
  }
  
  setSecretWord(word) {
    this.secretWord = word.toUpperCase();
  }

  setGuesses(number) {
    this.numberOfGuesses = number;
  }

  startGame() {
    this.isInProgress = true;
  }

  letterLengthError(letter) {
    if(letter.length != 1){
      throw "Invalid input; please enter a single character.";
    }
  }

  invalidInput(letter){
    const regex = /[A-Z]/i;
    if (!regex.test(letter)){
      throw "Invalid input; please enter a letter.";
    }
  }

  checkGuess(letter) {
    const arr = this.secretWord.split('')

    if (arr.find(element => element == letter)) {
      return letter;
    } else {
      this.incorrectGuesses.push(letter);
    }
    console.log(this.incorrectGuesses)
  }

  guessLetter(letter) {
    this.invalidInput(letter);
    this.letterLengthError(letter);
    this.checkGuess(letter);
    return letter
  }
};

module.exports = Hangman;
