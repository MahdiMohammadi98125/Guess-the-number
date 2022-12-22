'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // when the input is empty
  if (!guess) {
    showMessage('⛔ Not a number');
  }
  // when the player wins
  else if (guess === secretNumber) {
    showMessage('Correct Number🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lose 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// RESET the game
const resetBtn = document.querySelector('.again');
resetBtn.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  showMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
