var num = 5021;

console.log("Reverse of " + num + " is " + reverse(num))


function reverse(x) {
  let reverse = 0,
    remainder = 0;

  while (x > 0) {
    remainder = x % 10;
    reverse = reverse * 10 + remainder;
    x = parseInt(x / 10);
  }
  return reverse;
}
