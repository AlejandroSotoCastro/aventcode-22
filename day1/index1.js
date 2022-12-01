const fs = require("fs");

const input = "./day1/inputs1.txt";
// const input = "./day1/inputsTest.txt";
fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let elves = [];
  let accumulator = 0;
  data.split(/\r?\n/).forEach((line) => {
    // parse number
    const parsedLine = parseInt(line);
    if (isNaN(parseInt(line))) {
      elves.push(accumulator);
      accumulator = 0;
    } else {
      accumulator += parsedLine;
    }
  });
  console.log(elves.sort((a, b) => b - a)[0]);
});
