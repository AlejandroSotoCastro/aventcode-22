const fs = require("fs");

const input = "./day4/inputs.txt";
// const input = "./day4/inputsTest.txt";

class Elf {
  constructor(assignment) {
    const arr = assignment.split(/-/);
    this.low = Number(arr[0]);
    this.up = Number(arr[1]);
  }
}
fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let counter = 0;
  data.split(/\r?\n/).forEach((line) => {
    const [as1, as2] = line.split(/,/);
    const elf1 = new Elf(as1);
    const elf2 = new Elf(as2);

    if ((elf1.low <= elf2.low && elf1.up >= elf2.up) || (elf2.low <= elf1.low && elf2.up >= elf1.up)) counter++;
  });
  console.log(counter);
});
