
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

test('Users can guess a letter', () => {
  expect(game1.guessLetter("L")).toBe("L");
});

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

test('If the letter is incorrect, adds that letter to incorrect guesses', () => {
  game1.setSecretWord('DOG');
  game1.guessLetter('L')
  expect(game1.incorrectGuesses).toContain('L');
});

test('If the letter is correct, doesn`t add that letter to incorrect guesses', () => {
  game1.setSecretWord('DOG');
  game1.guessLetter('D')
  expect(game1.incorrectGuesses).not.toContain('D');
});