'use strict';

// Put your code here! :)
function six() {
  return 6;
}

function nine() {
  return 9;
}

function add(x, y) {
  return x + y;
}

// add(six(), nine());

// 3)
function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

// 4)
function constant(x) {
  return function f() {
    return x;
  };
}

const ten = constant(10);
// console.log(ten()); => 10

// 5)
function addn(...fns) {
  while (fns.length > 2) {
    let [fn0, fn1, ...rest] = fns;
    fns = [
      function f() {
        return add2(fn0, fn1);
      },
      ...rest,
    ];
  }

  return add2(fns[0], fns[1]);
}

const res = addn(constant(3), constant(7), ten, six);
console.log(res);
