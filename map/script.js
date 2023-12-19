/* eslint-disable */

const btn = document.querySelector('#btn');
const demo = document.querySelector('#demo');

function initial() {
  const number1 = [1, 9, 3, 10, 5, 6];
  const number2 = number1.slice().sort((a, b) => {
    return a - b;
  });

  btn.addEventListener('click', mapping);

  function mapping() {
    demo.innerHTML = number2.flatMap(mapFunction).join('');
  }

  function mapFunction(value, index) {
    return `<ul><li>${index}:${value * 5}</li></ul>`;
  }
}
document.addEventListener('DOMContentLoaded', initial);
