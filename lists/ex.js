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
// ten() => return 10

// 5) 
function addn(fns) {
    
}

// addn(constant(3), constant(7),...)