const A = ["cake", "apple pie", "cookie", "chips", "patties"];

let B = prompt("Serch the value in the data");
let find = false;
for (let i = 0; i < A.length; i++) {
    if (B === A[i]) {
     find = true;
     break;   
    }    

}

if (find) {    
    alert("the item is found ");
} else {
    alert("item is not found ");
}


