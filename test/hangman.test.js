
const Hangman = require('../main/hangman');

beforeEach(() => {
  game1 = new Hangman();
})

  test('User can input a secret word', () =>{
    expect(game1.setSecretWord("FIRST")).toBe("FIRST")
});