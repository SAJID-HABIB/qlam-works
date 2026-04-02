// <<<<<<< HEAD
function alphabets() {
  let letters = ["k", "a", "s", "h", "a", "n", "s", "h", "a", "h", "i", "d"];
  let count = 0;
  for (let letter of letters) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++
    }
  }
  return count;
}

console.log(alphabets());
;
// alphabets();
// =======
let num1 = prompt("Enetr first number :");
num1 = Number(num1);
let num2 = prompt("Enetr the 1st number :");
num2 = Number(num2);


let oprators = prompt("chose the oprators in this (+,-,*,/,%)");

let result = 0;
if (oprators == "+") {
    result = num1 + num2;
} else if (oprators == "-") {
    result = num1 - num2
} else if (oprators == "*") {
    result = num1 * num2;
} else if (oprators == "/") {
    result = num1 / num2;
} else if (oprators == "%") {
    result = num1 % num2;
} else {
    result = "invlaid oprator"
}

alert("the result is :"+result);
// >>>>>>> fb58b54e08e5446a22ca3a15582af58b381c5495
