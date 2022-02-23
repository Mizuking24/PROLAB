function A(num1, num2) {
  var num3 = num1 + num2;
  return num3;
}

function B(num) {
  return Math.round(num);
}

console.log(B(A(12.15, 18.2)));