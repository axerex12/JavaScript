'use strict';

const tempInC = parseFloat(prompt('Enter temperature in Celsius: '));
const tempInF = (tempInC * 9) / 5 + 32;
document.querySelector('#target').innerHTML = `${tempInC}°C is ${tempInF}°F`;
