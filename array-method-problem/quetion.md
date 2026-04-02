Q1.
let arr = [1,2,3,4];

let result = arr.map(function(a){
return a \* a;
});

console.log(result);

Q2
let arr = [1,2,3,4];

let result = arr.map(function(a){
return a.toString();
});

console.log(result);

Q3.
let arr = [1,2,3,4];

let result = arr.map(function(a){
return a + 5;
});

console.log(result);

Q4.

let arr = ['ali', 'ahmed', 'sara'];

let result = arr.map(function(a){
return a.toUpperCase();
})

console.log(result);

Q5.

let arr = ['apple', 'banana', 'kiwi'];

let result = arr.map(function(a){
return a.length;
})

console.log(result);

Q6.

let arr = ['Ali', 'Ahmed'];

let result = arr.map(function(a,b,arr){
return "mr." + a;
});

console.log(result);

Q7.

let arr = [2,4,6];

let result = arr.map(function(a,b){
return a \* b;
});

console.log(result);

Q8.

let arr = [2, 4, 6, 8];

let result = arr.map(function(a){
if (a % 2 == 0) {
console.log(a);
} else if (a === null) {
console.log(a)
}
return true;
});

Q9.

let arr = [0, 4, 6, 8];

let result = arr.map(function(a){
return Boolean(a);
});

console.log(result);

Q10.

let arr = ['JavaScript', 'Python', 'Java'];

let result = arr.map(function(a){
return a[0];
});

console.log(result);

FOR EACH METHOD

Q1.
let arr = [1,2,3,4];

arr.forEach(a =>
console.log(a));

Q2.

let arr = [1,2,3,4];

let result =arr.forEach(function(a,b){
arr[b] = a \* 2;
});
console.log(arr);

Q3.

let arrr = ['ali', 'sara', 'ahmed'];

arrr.forEach((n ,b) => {
arrr[b] = n.toUpperCase()});

console.log(arrr);

Q4.

let a = [1, 2, 3, 4, 5, 6];

a.forEach((n,m) => {
if (n % 2 === 0) {
console.log(n)
}
});

Q5.

let arr = [1,2,3];
let sum = 0;

arr.forEach(a => {
sum = sum + a;
});

console.log(sum);

Q6.

let arr = ['Ali', 'Sara'];

arr.forEach(function(a){
console.log("hello" + a);
})

Q7.

let arr = [
{name: 'Ali', age: 20},
{name: 'Sara', age: 25}
];

arr.forEach(function(a){
console.log( a.name, a.age);
})

assigment

function table(a) {
return function(b){
let c = a \* b;
console.log(c);
}
}

for (var i = 1; i < 11; i++) {
let tab = table(4)
tab(i);
}
