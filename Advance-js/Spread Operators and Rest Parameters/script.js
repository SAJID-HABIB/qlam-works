// Spread Operator & Rest Parameters
let fruits = ["apple", "mango"];
let veggies = ["carrot", "potato"];

let food = [...fruits, "sajid", ...veggies];

// reast paremetr

let total = 0;
function sum(...num) {
  num.forEach((a) => {
    total += a;
    console.log(total);
  });
}

sum(1, 2, 3);

console.log(total);

let orignal = [1, 2, 3, 4];
let copy = [...orignal];
copy.push(4);
console.log(orignal);
console.log(copy);

let user = {
  name: "sajid",
  age: 20,
};

let copyUser = { ...user };

console.log(copyUser);
