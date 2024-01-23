function guessingGame() {
  const secretNum = Math.floor(Math.random() * 100);
  let guesses = 0;
  let gameOver = false;

  return function (guess) {
    if (gameOver) {
      return `The game is over, you already won!`;
    }
    guesses++;
    if (guess === secretNum) {
      gameOver = true;
      return `You win! You found ${secretNum} in ${guesses} guesses.`;
    } else if (guess < secretNum) {
      return `${guess} is too low!`;
    } else {
      return `${guess} is too high!`;
    }
  };
}

module.exports = { guessingGame };
