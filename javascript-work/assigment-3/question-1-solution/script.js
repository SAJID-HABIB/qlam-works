let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < count.length; i++) {
    console.log(count[i]);
}

for (let i = count.length - 1; i >= 0; i--) {
    console.log(count[i]);
}

for (let i = 0; i < count.length; i++) {
    if (i % 2 == 0 ) {
        console.log("the number is even :",i);
    } else if (i % 2 == 1) {
        console.log("the number is odd",i);
    } else {
        console.log("the number not even and not odd");
    }
    
}

