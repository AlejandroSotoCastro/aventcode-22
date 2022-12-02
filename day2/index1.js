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
  X: "A",
  Y: "B",
  Z: "C",
};

const winAgainst = {
  A: "C",
  B: "A",
  C: "B",
};

/**
 * @param {String} opponent
 * @param {String} you
 * @returns {Number} amount of points received
 */
function playRound(opponent, you) {
  let roundPoints = 0;
  roundPoints += shapeValues[you];
  if (opponent === you) return (roundPoints += 3);
  if (winAgainst[you] === opponent) return (roundPoints += 6);
  return roundPoints;
}

const input = "./day2/inputs.txt";
//const input = "./day2/inputsTest.txt";

fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let totalPoints = 0;
  data.split(/\r?\n/).forEach((line) => {
    // parse number
    const round = line.split(/\s+/);
    roundPoints = playRound(round[0], translateShapes[round[1]]);
    totalPoints += roundPoints;
  });
  console.log(totalPoints);
});
