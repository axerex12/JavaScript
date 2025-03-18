let grade = 0;

const input = prompt("Enter the score!");

if (input <= 0 && input< 39) {
  grade = 0;
}else if (input >= 40 && input < 51) {
  grade = 1;
}
else if (input >= 52 && input < 63) {
  grade = 2;
}
else if (input >= 64 && input < 75) {
  grade = 3;
}
else if (input >= 76 && input < 87) {
  grade = 4;
}
else if (input >= 88 && input < 100) {
  grade = 5;
}
document.querySelector("#target").innerHTML = `Grade: ${grade}`;
