/* eslint-disable */

const btn = document.querySelector('#btn');
const demo = document.querySelector('#demo');

const cars = [
  { type: 'Volvo', year: 2016 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
];

btn.addEventListener('click', sortObjectName);

function sortObjectName() {
  const newArr = cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -Infinity;
    }
    if (x > y) {
      return Infinity;
    }
    return 0;
  });
  displayCars(newArr);
}

function displayCars() {
  demo.innerHTML =
    cars[0].type +
    ' ' +
    cars[0].year +
    '<br>' +
    cars[1].type +
    ' ' +
    cars[1].year +
    '<br>' +
    cars[2].type +
    ' ' +
    cars[2].year;
}
displayCars(cars);
