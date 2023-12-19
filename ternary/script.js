/* eslint-disable */

// ?

const btn = document.querySelector('#btn');
const demo = document.querySelector('#demo');

btn.addEventListener('click', checkAbility);

function checkAbility() {
  let voteable;
  let age = Number(document.querySelector('#age').value);

  if (isNaN(age)) {
    voteable = 'Input is not a number';
  } else {
    voteable = age < 18 ? 'too young' : 'Old enough';
  }

  demo.innerHTML = `${voteable} to vote`;
}

// ??

let name = null;
let text = 'missing';

let result = name ?? text;

const demo2 = document.querySelector('#demo1');
demo2.innerHTML = result;

// ?.

const car = { type: 'Fiat', model: '500', color: 'white' };
let carType = car?.type;
let carName = car?.name;
let carModel = car?.model;
let carColor = car?.color;
document.getElementById('demo2').innerHTML = carType;
document.getElementById('demo3').innerHTML = carName;
document.getElementById('demo4').innerHTML = carModel;
document.getElementById('demo5').innerHTML = carColor;
