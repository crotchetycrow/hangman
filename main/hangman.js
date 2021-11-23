export default class Hangman {
  constructor() {
    this.secretWord = "";
    this.numberOfGuesses = 0;
    this.isInProgress = false;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  
  setSecretWord(word) {
    const numRegex = /\d/;
    if(this.isInProgress == true) {
      throw "You cannot set a word whilst the game is in progress!"
    } else if(word == "" || numRegex.test(word)) {
      throw "Please enter a word"
    }

    this.secretWord = word.toUpperCase();  
  }

  setGuesses(number) {
    const nonNumRegex = /\D/;
    if (this.isInProgress) {
      throw "You cannot set the number of guesses whilst the game is in progress!";
    } else if (nonNumRegex.test(number)) {
      throw "Please enter a number";
    }
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
    letter = letter.toUpperCase()

    if (this.incorrectGuesses.find(element => element == letter)
    || this.correctGuesses.find(element => element == letter)) {
      throw "You've already guessed that. Please guess again." 
    }

    if (arr.find(element => element == letter)) {
      this.correctGuesses.push(letter);
      return letter;
    } else {
      this.incorrectGuesses.push(letter); 
   }
  }

  gameWon() {
    const correctWord = this.correctGuesses.sort().join('');
    let alphaWord = Array.from(this.secretWord).sort();
    // Turn the array into a Set (a type of object that takes an array and removes any duplicate values)
    alphaWord = new Set(alphaWord);
    // Turn the Set back into an Array so that it can be joined:
    alphaWord = [...alphaWord].join('');
   
    if (correctWord == alphaWord) {
      this.isInProgress = false;
      return true;
    };
  }

  winMessage() {
    return "Congratulations! You won!"
  }

  gameLost() {
    if (this.numberOfGuesses <= this.incorrectGuesses.length) {
      this.isInProgress = false;
      return true;
    }
  }

  loseMessage() {
    return "You've run out of guesses - better luck next time!";
  }


  guessLetter(letter) {
    if (this.isInProgress == false){
      throw "You can't guess a letter now!"
    }
  
    this.invalidInput(letter);
    this.letterLengthError(letter);
    this.checkGuess(letter);
    
    if(this.gameWon()) {
      return this.winMessage();
    } else if (this.gameLost()) {
      return this.loseMessage();
    }
  }
};
