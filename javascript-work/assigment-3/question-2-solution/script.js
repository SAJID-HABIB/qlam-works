const A = [24, 53, 78, 91, 12];
 let large = A[0];
for (let i = 1; i < A.length; i++)
     {
    if (A[i] > large) {
        large = A[i];
    }    
}
console.log("large number :",large);
