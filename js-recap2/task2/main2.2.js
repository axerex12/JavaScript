const numbers = [];

for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt('Enter a number'));
  numbers.push(num);
}
console.log(numbers);

const numCheck = parseInt(prompt('Enter a number to check'));

if (numbers.includes(numCheck)) {
  console.log('Yes');
} else {
  console.log('No');
}

numbers.pop();
console.log(numbers);

numbers.sort();
console.log(numbers);
