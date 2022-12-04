const fs = require("fs");

const input = "./day3/inputs.txt";
// const input = "./day3/inputsTest.txt";

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
  let acumulator = 0;
  data.split(/\r?\n/).forEach((line) => {
    const rSize = line.length / 2;
    const compart1 = line.substring(0, rSize);
    let compart2 = [...line.substring(rSize)];
    compart2 = compart2.filter((v, i) => compart2.indexOf(v) === i);
    compart2.forEach((item) => {
      const find = compart1.search(item);

      if (find > -1) {
        acumulator += calcPriority(item);
      }
    });
  });
  console.log(acumulator);
});
