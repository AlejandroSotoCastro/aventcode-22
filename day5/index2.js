const fs = require("fs");

const input = "./day5/inputs.txt";
// const input = "./day5/inputsTest.txt";

class Instruction {
  constructor(obj) {
    ({ amount: this.amount, from: this.from, to: this.to } = obj);
  }
}

let arr = [];
let instructionList = [];
function arrrr(index, value) {
  if (arr[index] == null) arr[index] = [];
  arr[index].push(value);
}

function fixArr() {
  return arr.filter((cratePile) => cratePile).map((cratePile) => cratePile.reverse());
}
fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const crateRegex = new RegExp(/\[/);
  const instructRegex = new RegExp(/move (?<amount>\d{1,2}) from (?<from>\d{1,2}) to (?<to>\d{1,2})/);

  data.split(/\r?\n/).forEach((line) => {
    if (crateRegex.test(line)) {
      for (let i = 0; i < line.length; i++) {
        if (crateRegex.test(line[i])) {
          let index = i + 1;
          arrrr(index, line[index]);
        }
      }
    }
    if (instructRegex.test(line)) {
      instructionList.push(new Instruction(instructRegex.exec(line).groups));
    }
  });

  const cargo = fixArr();
  // run instructions
  instructionList.forEach((instruction) => {
    const { from, to, amount } = instruction;
    const sub = cargo[from - 1].splice(cargo[from - 1].length - amount, amount);
    cargo[to - 1] = cargo[to - 1].concat(sub);
  });

  // take solution
  let = result = "";
  cargo.forEach((cratePile) => {
    result += cratePile.pop();
  });

  console.log(result);
});
