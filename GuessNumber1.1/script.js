'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let attempt = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function runGame() {
  const guess = Number(document.querySelector('.guess').value);

  // do not run attempt++ if enter key is pressed after correct number is guessed
  attempt++;

  if ((guess !== secretNumber) | (guess === secretNumber)) {
    document.querySelector('.attemptNumber').textContent = attempt;
  }

  if (!guess) {
    //! means no number
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.check').style.display = 'none';
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too High!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
}

document.querySelector('.check').addEventListener('click', function () {
  runGame();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    runGame();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  attempt = 0;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.attemptNumber').textContent = 0;
  document.querySelector('.check').style.display = '';
});
