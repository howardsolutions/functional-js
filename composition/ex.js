'use strict';

function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
function double(x) {
  return x * 2;
}
function half(x) {
  return x / 2;
}

function compose(...fns) {
  return function (arg) {
    let acc;

    for (let i = fns.length - 1; i >= 0; i--) {
      let currentFn = fns.at(i);

      if (!acc) {
        acc = currentFn(arg);

        continue;
      }

      acc = currentFn(acc);
    }

    return acc;
  };
}

function pipe(...fns) {
  return function (arg) {
    let acc;

    for (let fn of fns) {
      if (!acc) {
        acc = fn(arg);
        continue;
      }

      acc = fn(acc);
    }

    return acc;
  };
}

function pipe2(...fns) {
  return compose(...fns.reverse());
}

var f1 = compose(increment, decrement);
var f2 = pipe(decrement, increment);
var f3 = compose(decrement, double, increment, half);
var f4 = pipe(half, increment, double, decrement);
var f5 = compose(increment);
var f6 = pipe(increment);

console.log(f1(3) === 3);
console.log(f1(3) === f2(3));
console.log(f3(3) === 4);
console.log(f3(3) === f4(3));
console.log(f5(3) === 4);
console.log(f5(3) === f6(3));

// Compose - RIGHT TO LEFT
// Pipe - LEFT to RIGHT
