const fs = require("fs");

const input = "./day3/inputs.txt";
//const input = "./day3/inputsTest.txt";

function calcPriority(char) {
  const uniChar = char.charCodeAt();
  if (uniChar >= 96) return uniChar - 96;
  return uniChar - 38;
}
fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lineArr = data.split(/\r?\n/);
  let acumulator = 0;
  for (let i = 0; i < lineArr.length; i += 3) {
    const first = lineArr[i];
    const second = lineArr[i + 1];
    const third = lineArr[i + 2];
    first
      .split("")
      .filter((v, i) => first.indexOf(v) === i)
      .forEach((item) => {
        const oneMatch = second.search(item);
        if (oneMatch > -1) {
          const secondMatch = third.search(item);
          if (secondMatch > -1) {
            console.log(item);
            acumulator += calcPriority(item);
          }
        }
      });
  }
  console.log(acumulator);
});
