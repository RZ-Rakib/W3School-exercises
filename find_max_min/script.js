/* eslint-disable */

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const demo = document.querySelector('#demo');

// function initialize() {
//   const arr = [10, 4, 55, 22, 2, 36, 79, 1000, 3];
//   btn.addEventListener('click', maxItem);

//   function maxItem() {
//     const max = findMaxValue(arr);
//     displayList(max);
//   }

//   function findMaxValue(array) {
//     return Math.min.apply(null, array);
//   }

//   function displayList(maxValue) {
//     demo.innerHTML = `max value: ${maxValue}`;
//   }
//   displayList(max);
// }
// initialize();

// //

const arr = [10, 4, 55, 22, 2, 36, 79, 1000, 3];
btn1.addEventListener('click', myFunction1);
btn2.addEventListener('click', myFunction2);

function myFunction1() {
  const max = findMax(arr);
  demo.innerHTML = max;
}

function myFunction2() {
  const min = findMin(arr);
  demo.innerHTML = min;
}

function findMax(array) {
  let len = array.length;
  let max = -Infinity;

  while (len--) {
    if (array[len] > max) {
      max = array[len];
    }
  }
  return max;
}

function findMin(array) {
  let len = array.length;
  let min = Infinity;

  while (len--) {
    if (array[len] < min) {
      min = array[len];
    }
  }
  return min;
}
