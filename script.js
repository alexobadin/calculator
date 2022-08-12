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
const textArea = document.querySelector('.text');
const operatorText = document.querySelector('.operator');
const sound = document.querySelector('#audio');

const calcObj = {
  produceNumArr: [0],
  numberArr: [],
  produceNumString: '',
  numberString: '',
  curOperation: '',
};

let condition = false;

const displayOperation = function (e) {
  if (condition || calcObj.numberString.length !== 0 || calcObj.produceNumArr[0] !== 0) {
    operatorText.textContent = e;
  }
};
const pushOperation = function (e) {
  //   soundPlay();
  if (condition) {
    if (calcObj.curOperation === '=') {
      console.log('please get operation');
    } else {
      if (calcObj.numberString.length <= 8) {
        calcObj.numberString += e.target.value;
        resultText.textContent += e.target.value;
        console.log(calcObj);
      } else {
        console.log('hi');
      }
    }
    resultText.textContent = calcObj.numberString;
  }
};

// const soundPlay = function () {
//   const soundEffect = new Audio();
//   soundEffect.autoplay = true;
//   sound.currentTime = 0;
//   soundEffect.src = 'sound.mp3';
// };

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
  //   soundPlay();
  displayOperation('+');
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '+';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
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
    calcObj.produceNumArr[0] = Math.ceil(calcObj.produceNumArr * 1000) / 1000;
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
  //   soundPlay();
  displayOperation('-');
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '-';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
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
    calcObj.produceNumArr[0] = Math.ceil(calcObj.produceNumArr * 1000) / 1000;
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
  //   soundPlay();
  displayOperation('*');
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '*';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
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
    calcObj.produceNumArr[0] = Math.ceil(calcObj.produceNumArr * 1000) / 1000;
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
  //   soundPlay();
  displayOperation('/');
  if (calcObj.curOperation === '=') {
    calcObj.curOperation = '/';
    console.log(calcObj);
  } else if (calcObj.numberString === '') {
    calcObj.curOperation = '/';
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
    calcObj.produceNumArr[0] = Math.ceil(calcObj.produceNumArr * 1000) / 1000;
    calcObj.numberString = '';
    calcObj.curOperation = '/';

    resultText.textContent = calcObj.produceNumArr;
    console.log(calcObj);
  }
});

//EQUAL

equalBtn.addEventListener('click', function () {
  //   soundPlay();
  displayOperation('=');
  if (condition) {
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
      calcObj.produceNumArr[0] = Math.ceil(calcObj.produceNumArr * 1000) / 1000;

      calcObj.numberString = '';
      calcObj.curOperation = '';
      calcObj.numberArr = [];
      calcObj.curOperation = '=';

      console.log(calcObj);
      resultText.textContent = calcObj.produceNumArr;
    }
  }
});

clearBtn.addEventListener('click', function () {
  //   soundPlay();
  calcObj.produceNumArr = [0];
  calcObj.numberArr = [];
  calcObj.produceNumString = '';
  calcObj.numberString = '';
  calcObj.curOperation = '';
  console.log(calcObj);
  resultText.textContent = '';
  operatorText.textContent = '';
});

backBtn.addEventListener('click', function () {
  //   soundPlay();
  calcObj.numberString = calcObj.numberString.slice(0, -1);
  resultText.textContent = calcObj.numberString;
  console.log(calcObj);
});

onBtn.addEventListener('click', function () {
  //   soundPlay();
  textArea.classList.toggle('color');
  if (!condition) {
    condition = false;
    calcObj.produceNumArr = [0];
    calcObj.numberArr = [];
    calcObj.produceNumString = '';
    calcObj.numberString = '';
    calcObj.curOperation = '';
    console.log(calcObj);
    resultText.textContent = '';
    operatorText.textContent = '';
    condition = true;
  } else {
    condition = false;
    calcObj.produceNumArr = [0];
    calcObj.numberArr = [];
    calcObj.produceNumString = '';
    calcObj.numberString = '';
    calcObj.curOperation = '';
    console.log(calcObj);
    resultText.textContent = '';
    operatorText.textContent = '';
  }
});
