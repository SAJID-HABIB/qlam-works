// let password = prompt("Enetr your password :");
// let char = "";
// let aplhebet;
// let num = 0;
// for (const char of password) {
//   if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//     aplhebet = true;
//   } else if (num >= 0 && num <= 9) {
//     num = true;
//   } else {
//      alert("the password :")
//   }
// }

let password = prompt("Enetr the password :");
let lowerCase = false;
let upperCase = false;
let num = false;

for (const char of password) {
  if (char >= "A" && char <= "Z") {
    upperCase = true;
  } else if (char >= "a" && char <= "z") {
    lowerCase = true;
  } else if (char >= "0" && char <= "9") {
    num = true;
  }
  // alert("the password is corret :", password);
}

if (lowerCase && upperCase && num) {
  alert("the password is correct :", password);
} else {
  alert("the password is not correct :", password);
}
