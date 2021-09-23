class Hangman {
  constructor() {
    this.secretWord = "";
    this.numberOfGuesses = 0;
    this.isInProgress = false;
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

  guessLetter(letter) {
    return letter;
  }
};

module.exports = Hangman;
