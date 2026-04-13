// Calculate the sum of numbers from 1 to n (user input).

let n = prompt("Enetr the number to find the sum");
let total = 0;
for (let i = 0; i <= n; i++) {
  total += i;
  
}

console.log(total);


// Print the multiplication table of a given number.

let num1 = 10;
let mul = 1;
for (let i = 0; i <= num1; i++) {
  mul = num1 * i;
console.log(mul);

}

// Count how many numbers between 1 and 50 are divisible by 5.
let num = 50;
let count = 0;
for (let i = 1; i <= num; i++) {
  if (i % 5 == 0) {
    
    count++;
    
  }
  
}
console.log(count);


for (let i = 10; i > 0; i--) {
  console.log(i);
  
  
}

// Find the factorial of a number using a loop.

let fact = 1;
let n0 = 5;
for (let i = 1; i <= n0; i++) {
  fact = fact * i; 
}

console.log("the factorial of the 5 is :",fact);



// Print all prime numbers between 1 and 100.
let n1 =100;

for (let i = 0; i <= n1; i++) {
  if (i % 2 == 1 && i % i == 0) {
    console.log(i); 
  } 
}


// Print a pattern:

// *
// **
// ***
// ****
// *****

let n2 = 5;
for (let i = 1; i <= n2; i++) {
let str = "";

  for (let j = 1; j <= i; j++) {
    str = str + "*";
    
  }
    console.log(str);
  
}



// Print a pyramid pattern:

//     *
//    ***
//   *****
//  *******


let n3 = 4;
// let col = 7;
for (let i = 1; i <= 4; i++) {
  let star1 = "";
  for (let j = 1; j <=n3 -i; j++) {
    star1 = star1 + " ";
    
  }
  for (let k = 1; k <= 2 * i -1; k++) {
    star1 = star1 + "*";
    
  }

  console.log(star1);
  
  
}