
const Hangman = require('../main/hangman');

beforeEach(() => {
  game1 = new Hangman();
})

  test('User can input a secret word', () =>{
    game1.setSecretWord("first");
    expect(game1.secretWord).toBe("FIRST");
});
