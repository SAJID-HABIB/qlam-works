<<<<<<< HEAD
var arr =  [1, 2, 3];
let result = mirror(arr);

function mirror(arr) {
  return arr.concat(arr.slice().reverse())
}

console.log("the resuult :",result);
=======
let a = prompt("Enetr a aber :");
a = Number(a);

if (a % 2 === 0) {
    alert("The aber is even :"+a);
} else if (a % 2 === 1) {
    alert("The aber is odd :"+a);
} else {
    alert("The aber is not even and not odd")
}
>>>>>>> fb58b54e08e5446a22ca3a15582af58b381c5495
