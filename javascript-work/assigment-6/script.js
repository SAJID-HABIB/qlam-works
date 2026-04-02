function mul(a) {
  return function mul1(b) {
    for (let i = 1; i < 11; i++) {
      console.log(" 6  x", i, "=" + a * i);
    }
  };
}

mul(6)();
