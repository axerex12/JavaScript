const side1 = prompt("Enter side1 of triangle");
const side2 = prompt("Enter side2 of triangle");
const side3 = prompt("Enter side3 of triangle");

if (side1 === side2 && side2 === side3) {
  document.querySelector("#target").innerHTML = "Equilateral triangle";
}else if (side1 === side2 || side2 === side3 || side3 === side1) {
  document.querySelector("#target").innerHTML = "Isosceles triangle";
}else{
  document.querySelector("#target").innerHTML = "Scalene triangle";
}
