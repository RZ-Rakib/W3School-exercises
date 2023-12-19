/* eslint-disable */

const btn = document.querySelector('#btn');
const demo = document.querySelector('#demo');

function initialize() {
  const arr = ['Banana', 'Orange', 'Apple', 'Mango'];
  btn.addEventListener('click', addItem);

  function addItem() {
    arr.push('Guava', 'Komla', 'grape');
    displayList();
  }

  function displayList() {
    demo.innerHTML = `<ul> ${arr
      .map((item) => `<li>${item}</li>`)
      .join(``)} </ul`;
  }
  displayList();
}
initialize();
