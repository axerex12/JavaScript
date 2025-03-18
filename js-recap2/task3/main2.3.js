let numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'done' to finish):");

  if (input.toLowerCase() === 'done') {
    break;
  }

  let number = Number(input);

  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    alert('Please enter a valid number.');
  }
}

let evenNumbers = [];
for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

let output = document.getElementById("output");
if (evenNumbers.length > 0) {
  output.textContent = 'Even Numbers: ' + evenNumbers.join(', ');
} else {
  output.textContent = 'Even Numbers: None';
}
