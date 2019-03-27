function calculate() {
  var number1 = parseInt(document.getElementById("number1").value);
  var operator = document.getElementById("operator").value;
  var number2 = parseInt(document.getElementById("number2").value);
  var answer;

  if (operator == "+") {
    answer = number1 + number2;
  } else if (operator == "-") {
    answer = number1 - number2;
  } else if (operator == "*") {
    answer = number1 * number2;
  } else if (operator == "/") {
    answer = number1 / number2;
  } else {
      answer = 0;
  }

  console.log('Answer of ' + number1 + operator + number2 + " is " + answer)
  document.getElementById("answer").innerText = 'Answer of ' + number1 + operator + number2 + " is " + answer;
}
