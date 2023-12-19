/* eslint-disable */

const demo = document.querySelector('#demo');

function initializing() {
  const numbers = [3, 45, 23, 79, 10, 1, 23];

  numbers.forEach(callBackFunction);

  function callBackFunction(value, index, array) {
    demo.innerHTML = `<ul> ${array
      .map((value) => `<li>${value}</li>`)
      .join('')}</ul>`;
  }
}
initializing();
