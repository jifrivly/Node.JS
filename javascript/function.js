var num1 = 456,
  num2 = 342,
  num3 = 450,
  num4 = 5;

console.log("sum of " + num1 + " and " + num2 + " = " + sum(num1, num2));
console.log("Difference of " + num1 + " and " + num2 + " = " + sub(num1, num2));
console.log( num1 + " * " + num2 + " = " +mul(num1,num2))
console.log( num3 + " / " + num4 + " = " +div(num3,num4))

function sum(x, y) {
  return x + y;
}

function sub(x, y) {
    return x-y;
}

function mul(x,y) {
    return x*y;
}

function div(x,y) {
    return x/y;
}
