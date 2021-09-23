
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
  expect(game1.guesses).toBe(3);
});

test('Can check if a game is in progress', () => {
  game1.startGame()
  expect(game1.isInProgress).toBe(true);
});