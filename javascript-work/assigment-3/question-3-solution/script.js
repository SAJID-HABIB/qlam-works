let arr1 = [3,"a","a","a",2,3,"a",3,"a",2,4,9,3];

let unique = [];
for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    if (!unique.includes(current)) {
        unique.push(current)
    } 
}
console.log("unique array :",unique);



