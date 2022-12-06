const fs = require("fs");

const input = "./day6/inputs.txt";
// const input = "./day6/inputsTest.txt";

fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    STP_MARKER = i + 4;
    let marker = data.substring(i, STP_MARKER);
    marker = marker.split("").filter((v, i) => marker.indexOf(v) === i);
    if (marker.length === 4) {
      console.log(STP_MARKER);
      break;
    }
  }
});
