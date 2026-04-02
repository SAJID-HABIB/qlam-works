let text = "The quick brown fox jumps over the lazy dog";
let word = text.split(" ");
console.log(word);

let count = 0;

word.forEach(item => {
  if (item.toLowerCase() === "the") {
    count++;
  }
});
console.log("count is ",count);
