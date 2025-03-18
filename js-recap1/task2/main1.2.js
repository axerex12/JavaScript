'use strict';

const xy = (prompt('Enter x1,y1,x2,y2 in single input no spaces : '));
const input = xy.split("")
const x1 = input[0]
const y1 = input[1]
const x2 = input[2]
const y2 = input[3]

const distanceBetween = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.querySelector('#target').innerHTML = ` Distance = ${distanceBetween}`;
