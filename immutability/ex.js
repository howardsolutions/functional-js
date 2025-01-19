'use strict';

const NUM_COUNT = 6;

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function recordNumber(num, numbers) {
  if (!numbers.includes(num)) {
    numbers = [...numbers, num];
    numbers.sort((a, b) => a - b);
  }

  return numbers;
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < NUM_COUNT) {
  luckyLotteryNumbers = recordNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers)
  );
}

console.log(luckyLotteryNumbers);
