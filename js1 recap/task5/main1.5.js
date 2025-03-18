const input = parseInt(prompt("Anna numero!: "));
let sum = 0;

for (let i = input; i>=0; i--){
  sum += i;
}
console.log(sum);
document.querySelector("#target").innerHTML = `Sum: ${sum}`;
