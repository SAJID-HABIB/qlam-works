function mul (a) {
  
  return function mul1(b) {
    
    for (let count = 1; count < 11; count++) {
       console.log(" 6  x " + a  *  count);
    }
  }

}



mul(6)();