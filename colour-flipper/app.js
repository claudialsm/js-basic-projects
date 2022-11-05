'use strict';

const form = document.querySelector('.input-form');
const colourName = document.querySelector('.colour-name');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the window from reloading
  let colour = document.getElementById('colour').value.toLowerCase();
  document.body.style.backgroundColor = colour;
  colourName.innerHTML = colour;
  colourName.style.color = colour;
});
