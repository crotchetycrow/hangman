class Hangman {
  constructor() {
    this.secretWord = "";
    this.guesses = 0;
    this.isInProgress = false;
  }
  
  setSecretWord(word) {
    this.secretWord = word.toUpperCase();
  }

  setGuesses(numberOfGuesses) {
    this.guesses = numberOfGuesses
  }

  startGame() {
    this.isInProgress = true;
  }
};

module.exports = Hangman;
