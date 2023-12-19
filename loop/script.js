/* eslint-disable */

// break

const demo = document.querySelector('#demo');

let text1 = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text1 += 'The number is ' + i + '<br>';
}
demo.innerHTML = text1;

// continue

const demo1 = document.querySelector('#demo1');

let text2 = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text2 += 'The number is ' + i + '<br>';
}

demo1.innerHTML = text2;

// break with reference

const demo2 = document.querySelector('#demo2');

const cars = ['bmw', 'volvo', 'mazda', 'toyota'];

let text3 = '';
list: {
  text3 += cars[0] + '<br>';
  text3 += cars[1] + '<br>';
  text3 += cars[2] + '<br>';
  break list;
  text3 += cars[3] + '<br>';
}

demo2.innerHTML = `<ul><li>${text3}</li></ul>`;

// iteraables

const demo3 = document.querySelector('#demo3');

let text4 = '';
for (let car of cars) {
  text4 += car + '<br>';
}

demo3.innerHTML = text4;

//
