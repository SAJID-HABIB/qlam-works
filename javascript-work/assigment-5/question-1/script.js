let email = prompt("Enetr your email");

let index = email.indexOf("@");
let dot = email.indexOf(".", index);
if (email.length > 0 && index && dot > index + 1 && dot < email.length - 1) {
  alert("your email is correct");
} else {
  alert("your email is not correct");
}
