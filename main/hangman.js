class Hangman {
  constructor() {
    this.secretWord = "";
  }
  
  setSecretWord(word) {
    this.secretWord = word.toUpperCase();
  }
};

module.exports = Hangman;
