const input = parseInt(prompt("Enter a number!: "));
let table = document.getElementById("table");

for(let i = 1; i <= input; i++){
  let row = table.insertRow(i-1);
  for(let j = 1; j <= input; j++){
    let cell = row.insertCell(j-1);
    cell.innerHTML = i * j;
    console.log(i * j);
  }
}



