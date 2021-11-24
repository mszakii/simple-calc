let num = document.getElementById("num");
let operator = document.getElementById("operator");
let num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
// syntax
let syntax = 0;
// send
btn.onclick = () => {
  let n1 = num.value;
  let o = operator.value;
  let n2 = num2.value;
  if (o != "") {
    if (o == "*" || o == "×") {
      syntax = n1 * n2;
    } else if (o == "/" || o == "÷") {
      syntax = n1 / n2;
    } else if (o == "+") {
      syntax = +n1 + +n2;
    } else if (o == "-") {
      syntax = n1 - n2;
    } else if (o == "%") {
      syntax = n1 % n2;
    } else {
      syntax = "Syntax Error: Please inter a valid operator"
    }
  }
  result.innerHTML = syntax;
};

result.innerHTML = syntax;