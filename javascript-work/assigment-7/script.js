let color = [];

function addColorStart() {
  let newColor = prompt("ENter the color to add the beggning");
  return new Promise((resolve, reject) => {
    if (!newColor || newColor.trim() === "") {
      reject("no color entered");
    } else {
      setTimeout(() => {
      color.unshift(newColor);
      resolve(color);
    }, 1000);
    }
  });
}

function addColorEnd() {
  let newColor = prompt("ENter the color to add the Ending");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      color.push(newColor);
      resolve(color);
      reject("Color not add the ending of the Array")
    }, 2000);
  });
}

function addTwoClorStart() {
  let color1 = prompt("Enter first color:");
  let color2 = prompt("Enter second color:");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      color.unshift(color1, color2);
      resolve(color);
    }, 3000);
  });
}

function deleteFirst() {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
    color.shift();
      resolve(color);
    }, 4000);
  })
}

function deleteLast() {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
    color.pop()
    resolve(color);
    reject("Last color not delete ");
    }, 5000);
  })
}


function addColIndex() {
  let index = Number(prompt("Enter the index to add the clor"));
  let addColor = prompt("which color do yo want to add");
  return new Promise ((resolve,reject) => {
    if (!index || !addColor || isNaN(index)) {
      return reject("invalid input");      
    }
    if (index < 0 || index > color.length) {
      reject ("index out of the range");
    }
    setTimeout(() => {
      color.splice(index,0,addColor);
      resolve(color);
    }, 6000);
  })
}




function deletColIndex() {
  let index = Number(prompt("Enter the index to delete the clor"));
  let deleteColor = prompt("which color do yo want to delete");
  return new Promise ((resolve,reject) => {
    if (!index || !addColor || isNaN(index)) {
      return reject("invalid input");      
    }
    if (index < 0 || index > color.length) {
      reject ("index out of the range");
    }
    setTimeout(() => {
      color.splice(index,deleteColor,0);
      resolve(color);
    }, 6000);
  })
}



addColorStart()
.then((updatedArray1) => {
  console.log(updatedArray1);
  return addColorEnd();
})
.then((updatedArray2) => {
  console.log(updatedArray2);
  return addColorStart();
})
.then((updatedArray3) => {
console.log(updatedArray3);
return deleteFirst();
})
.then((updatedArray4) => {
  console.log(updatedArray4);
  return deleteLast();  
})
.then((updatedArray5) => {
  console.log(updatedArray5);
  return addColIndex();
})
.then((updatedArray6) => {
  console.log(updatedArray6);
  return deletColIndex();
})
.then((updatedArray7) => {
  console.log(updatedArray7);
  
})
.catch((errFc1) => {
  console.error("Error :",errFc1);  
})
.catch((errFc2) => {
  console.error("Error :",errFc2);  
});
