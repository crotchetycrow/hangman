
const Hangman = require('../main/hangman');

beforeEach(() => {
  game1 = new Hangman();
})

test('User can input a secret word', () => {
  game1.setSecretWord("first");
  expect(game1.secretWord).toBe("FIRST");
});

test('Users can set incorrect number of guesses', () => {
  game1.setGuesses(3);
  expect(game1.numberOfGuesses).toBe(3);
});

test('Can check if a game is in progress', () => {
  game1.startGame()
  expect(game1.isInProgress).toBe(true);
});

describe('When a game has been started', () => {

  beforeEach(() => {
    game1 = new Hangman();
    game1.setSecretWord('Dog');
    game1.setGuesses(5);
    game1.startGame();
  })

  test('Users get error if inputting something that isn not a letter', () => {
    expect(() => {
      game1.guessLetter('/');
    }).toThrow("Invalid input; please enter a letter.");
  });
  
  test('Users get error if inputting more than one character', () => {
    expect(() => {
      game1.guessLetter('pb');
    }).toThrow("Invalid input; please enter a single character.");
  });
  
  describe('When guessing letters', () => {
  
    test('Users can guess a letter', () => {
      expect(game1.guessLetter("S")).toBe("S");
    });
  
    test('If the letter is incorrect, adds that letter to incorrect guesses', () => {
      game1.guessLetter('L');
      expect(game1.incorrectGuesses).toContain('L');
    });
  
    test('If the letter is correct, doesn`t add that letter to incorrect guesses', () => {
      game1.guessLetter('D')
      expect(game1.incorrectGuesses).not.toContain('D');
    });
  
    test('Even if the guessed in lower case, if the letter is correct, doesn`t add that letter to incorrect guesses', () => {
      game1.guessLetter('d')
      expect(game1.incorrectGuesses).not.toContain('d');
    });
  
    test('If the letter has already been incorrectly guessed, throw error', () => {
      expect(() => {
        game1.guessLetter('L');
        game1.guessLetter('L');
      }).toThrow("You've already guessed that. Please guess again.")
    });
  
    test('If the letter has already been correctly guessed, throw error', () => {
      expect(() => {
        game1.guessLetter('D');
        game1.guessLetter('D');
      }).toThrow("You've already guessed that. Please guess again.")
    });
  
    test('If all letters in secret word have been guessed, game is no longer in progress', () => {
      game1.guessLetter('D');
      game1.guessLetter('O');
      game1.guessLetter('G');
      expect(game1.isInProgress).toBe(false);
    });

    test('If all letters in secret word have been guessed out of order, game is no longer in progress', () => {
      game1.guessLetter('O');
      game1.guessLetter('D');
      game1.guessLetter('G');
      expect(game1.isInProgress).toBe(false);
    });

    test('Recognises that all letters have been guessed when the secret word has duplicate letters', () => {
      game1.setSecretWord("Riddle");
      game1.guessLetter('R');
      game1.guessLetter('I');
      game1.guessLetter('D');
      game1.guessLetter('L');
      game1.guessLetter('E');
      expect(game1.isInProgress).toBe(false);
    });
  });
})


const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}