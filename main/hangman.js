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
    const regex = /[A-Z]/i;
    if (regex.test(letter)) {
      return letter;
    } else {
      throw "Invalid input; please enter a letter.";
    };
    
  }
};

module.exports = Hangman;
