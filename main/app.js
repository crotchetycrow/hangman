  const game = new Hangman();
  
  const startButton = document.getElementById("startingButton");
  
  
  startButton.addEventListener("click", function(){
    let secretWord = document.getElementById("secret-word").value;
    let numberGuessChoice = document.getElementById("number-of-guesses").value;
    game.setSecretWord(secretWord);
    game.setGuesses(numberGuessChoice);
    game.startGame();
  });
