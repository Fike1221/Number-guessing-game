'use strict';

let randomNumber = Math.ceil(Math.random() * 20);
let highScore = Number(document.querySelector('.highscore').textContent);
let score = 20;

const changeText = function (selector, message) {
  document.querySelector(selector).textContent = message;
};

const playAgain = function () {
  randomNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.body').style['background-color'] = '#222';
  changeText('.number', '?');
  changeText('.message', 'Start Guessing...');
  changeText('.score', 20);
  document.querySelector('.guess').value = '';
  score = 20;
};

const checkAnswer = function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess === 0) {
    changeText('.message', 'Enter number to the input field!');
  } else if (score === 1) {
    changeText('.score', 0);
    changeText('.message', '😭 You loss!');
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (randomNumber !== guess) {
    changeText(
      '.message',
      guess > randomNumber ? '📈 Too High;' : '📉 Too low!'
    );
    score--;
    changeText('.score', score);
  } else {
    changeText('.message', '🎉 Correct Answer');
    document.querySelector('.body').style['background-color'] = 'green';
    changeText('.number', randomNumber);
    if (score > highScore) {
      highScore = score;
      changeText('.highscore', score);
    }
  }
};

document.querySelector('.check').addEventListener('click', checkAnswer);

document.querySelector('.again').addEventListener('click', playAgain);
