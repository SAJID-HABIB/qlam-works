// let myName = ["s", "j", "i", "o"];
// let word = myName;
// for (const myName of word) {
//   if (
//     myName == "i" ||
//     myName == "e" ||
//     myName == "i" ||
//     myName == "o" ||
//     myName == "u"
//   ) {
//     console.log("the vowels is :", myName);
//   } else {
//     console.log("not vowels is :", myName);
//   }
// }

// let str = [
//   "The",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];
// let count = 0;
// let word = str;

// for (const str of word) {
//   if (str.toLocaleLowerCase() === "the") {
//     count++;
//   }
// }

// console.log("total count :", count);

// let arr = [1, 2, 3];
// let result = miror(arr);

// function miror(arr) {
//   return arr.concat(arr.slice().reverse());
//   // console.log("the duplicate array is :", arr);
// }

// console.log("the duplicate array is :", result);

let email = prompt("Enetr the email");
let atIndex = email.indexOf("@");
let dotIndex = email.indexOf(".");

if (atIndex > 0 && dotIndex > dotIndex + 1 && dotIndex < email.length - 1) {
  alert("your email is correct ", email);
} else {
  console.log("your email is not correct ", email);
}
