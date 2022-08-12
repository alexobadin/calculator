'use strict';

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');
const divisionBtn = document.querySelector('#division');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const equalBtn = document.querySelector('#equal');
const onBtn = document.querySelector('#on');
const backBtn = document.querySelector('#back');
const clearBtn = document.querySelector('#clear');
const resultText = document.querySelector('.result');

const calcObj = {
  produceNumArr: [0],
  numberArr: [],
  produceNumString: '',
  numberString: '',
  curOperation: '',
};

const pushOperation = function (e) {
  if (calcObj.curOperation === '=') {
    console.log('please get operation');
  } else {
    calcObj.numberString += e.target.value;
  }
  console.log(calcObj.numberString);
};

// Input numbers
btn1.addEventListener('click', function (e) {
  pushOperation(e);
});
btn2.addEventListener('click', function (e) {
  pushOperation(e);
});
btn4.addEventListener('click', function (e) {
  pushOperation(e);
});
btn3.addEventListener('click', function (e) {
  pushOperation(e);
});
btn5.addEventListener('click', function (e) {
  pushOperation(e);
});
btn6.addEventListener('click', function (e) {
  pushOperation(e);
});
btn7.addEventListener('click', function (e) {
  pushOperation(e);
});
btn8.addEventListener('click', function (e) {
  pushOperation(e);
});
btn9.addEventListener('click', function (e) {
  pushOperation(e);
});
btn0.addEventListener('click', function (e) {
  pushOperation(e);
});

// Operations
addBtn.addEventListener('click', function () {
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '+';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
    resultText.textContent = 'ВВЕДИТЕ ЧИСЛО';
    calcObj.curOperation = '+';
  } else if (calcObj.curOperation === '-') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] -= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '+';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '*') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] *= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '+';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '/') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] /= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '+';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] += Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '+';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  }
});

subtractBtn.addEventListener('click', function () {
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '-';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
    resultText.textContent = 'ВВЕДИТЕ ЧИСЛО';
    calcObj.curOperation = '-';
  } else if (calcObj.produceNumArr[0] === 0) {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] = Math.abs(Number(calcObj.numberString));
    calcObj.numberString = '';
    calcObj.curOperation = '-';
    console.log(calcObj);
  } else if (calcObj.curOperation === '*') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] *= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '-';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '/') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] /= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '-';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '+') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] += Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '-';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] -= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '-';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  }
});

multiplyBtn.addEventListener('click', function () {
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '*';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
    resultText.textContent = 'ВВЕДИТЕ ЧИСЛО';
    calcObj.curOperation = '*';
  } else if (calcObj.curOperation === '-') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] -= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '*';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '/') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] /= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '*';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '+') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] += Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '*';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.produceNumArr[0] === 0) {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] = Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '*';

    console.log(calcObj);
  } else {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] *= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '*';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  }
});

divisionBtn.addEventListener('click', function () {
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '/';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
    resultText.textContent = 'ВВЕДИТЕ ЧИСЛО';
    calcObj.curOperation = '';
  } else if (calcObj.curOperation === '-') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] -= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '/';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '*') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] *= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '/';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '+') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] += Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '/';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.produceNumArr[0] === 0) {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] = Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '/';

    console.log(calcObj);
  } else {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] /= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '/';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  }
});

//EQUAL

equalBtn.addEventListener('click', function () {
  calcObj.numberArr.push(Number(calcObj.numberString));
  if (calcObj.curOperation === '+') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] += Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '';
    calcObj.numberArr = [];
    calcObj.curOperation = '=';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '-') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] -= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '';
    calcObj.numberArr = [];
    calcObj.curOperation = '=';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  } else if (calcObj.curOperation === '*') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] *= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '';
    calcObj.numberArr = [];
    calcObj.curOperation = '=';

    console.log(calcObj);
    resultText.textContent = calcObj.produceNumArr;
  } else if (calcObj.curOperation === '/') {
    calcObj.numberArr.push(Number(calcObj.numberString));
    calcObj.produceNumArr[0] /= Number(calcObj.numberString);
    calcObj.numberString = '';
    calcObj.curOperation = '';
    calcObj.numberArr = [];
    calcObj.curOperation = '=';

    console.log(calcObj);
    resultText.textContent = calcObj.produceNumArr;
  }
});

// subtractBtn.addEventListener('click', function () {
//   if (calcObj.curOperation !== '') {
//     console.log('repeated operation');
//   } else {
//     calcObj.curOperation = '-';
//     let x = Number(calcObj.numberString) - Number(calcObj.produceNumString);
//     calcObj.produceNum = [];
//     calcObj.number = [];
//     calcObj.numberString = '';

//     console.log(x);
//     calcObj.produceNum.push(x);
//     console.log(calcObj);
//   }
// });

// let arrayA = [];
// let arrayB = [];
// let a;
// let b;
// let operator;
// let produceNumber;
// let condition = true;

// const add = function (a, b) {
//   return a + b;
// };
// const subtract = function (a, b) {
//   return a - b;
// };
// const multiply = function (a, b) {
//   return a * b;
// };

// const division = function (a, b) {
//   return a / b;
// };

// const operation = function (e) {
//   operator = e.target.value;
//   console.log(operator);
//   condition = false;
// };

// const pressNum = function (e) {
//   if (condition) {
//     arrayA.push(e.target.value);
//     resultText.textContent = arrayA.join('');
//     a = Number(arrayA.join(''));
//     console.log(a);
//   } else {
//     arrayB.push(e.target.value);
//     resultText.textContent = arrayB.join('');
//     b = Number(arrayB.join(''));
//     console.log(b);
//   }
// };

// // const operate = function (...arr) {
// //   if (arr.includes('+')) {
// //     return add(a, b);
// //   } else if (arr.includes('-')) {
// //     return subtract(a, b);
// //   } else if (arr.includes('*')) {
// //     multiply(a, b);
// //   } else if (arr.includes('/')) {
// //     return division(a, b);
// //   }
// // };
// addBtn.addEventListener('click', function (e) {
//   operation(e);
//   add(a, b);
//   produceNumber = add(a, b);
//   console.log(produceNumber);
// });

// btn1.addEventListener('click', function (e) {
//   pressNum(e);
// });

// btn7.addEventListener('click', function (e) {
//   pressNum(e);
// });

// // addEventListener('click', function (e) {
// //     e.preventDefault();
// //     a = Number(firstNum.value);
// //     b = Number(secNum.value);
// //     operator = oper.value;
// //     result.textContent = operate(a, operator, b);
// //   });

// onBtn.addEventListener('click', function (e) {});
