// RULES
/**
 * Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
 * (1 for Rock, 2 for Paper, and 3 for Scissors)
 * plus the score for the outcome of the round
 * (0 if you lost, 3 if the round was a draw, and 6 if you won)
 */
const fs = require("fs");

const shapeValues = {
  A: 1, //Rock
  B: 2, //Paper
  C: 3, //Scissors
};

const translateShapes = {
  X: 0,
  Y: 3,
  Z: 6,
};

const looseAgainst = {
  A: "C",
  B: "A",
  C: "B",
};

const winAgainst = {
  A: "B",
  B: "C",
  C: "A",
};

const input = "./day2/inputs.txt";
// const input = "./day2/inputsTest.txt";

/**
 * @param {String} opponent
 * @param {String} result
 * @returns {String} your shape
 */
// X means you need to lose.
// Y means you need to end the round in a draw.
// Z means you need to win.
function playRound(opponent, result) {
  if (result === "X") return looseAgainst[opponent];
  if (result === "Y") return opponent;
  return winAgainst[opponent];
}

fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let totalPoints = 0;
  data.split(/\r?\n/).forEach((line) => {
    let roundPoints = 0;
    const round = line.split(/\s+/);
    const result = round[1];
    const opponent = round[0];
    const you = playRound(opponent, result);
    roundPoints = shapeValues[you] + translateShapes[result];
    totalPoints += roundPoints;
  });
  console.log(totalPoints);
});
