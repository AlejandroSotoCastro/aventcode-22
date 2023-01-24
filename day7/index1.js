const fs = require("fs");

// const input = "./day7/inputs.txt";
const input = "./day7/inputsTest.txt";

fs.readFile(input, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  class Directory {
    files = [];
    directories = [];

    constructor(name, parent) {
      this.name = name;
      this.parent = parent;
    }

    getFilesSize() {
      let bla = this.files.reduce((total, file) => {
        return total + file.size;
      }, 0);
      return bla;
    }
  }

  class File {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  }

  function calcLongPath(children) {
    let longest = 0;
    children.forEach((child) => {
      let acc = 0;
      let cursor = child;
      while (cursor.parent !== null) {
        acc += cursor.getFilesSize();
        cursor = cursor.parent;
      }

      console.log(acc);
      if (acc > longest) longest = acc;
    });
    return longest;
  }

  const listOfDirs = [];
  let currentDir = null;
  data.split(/\r?\n/).forEach((line) => {
    switch (line[0]) {
      case "$":
        // console.log("command");
        if (line[2] === "c") {
          // console.log("change dir");
          const dirName = line.split(" ")[2];
          if (dirName === "..") {
            // console.log("go back one", currentDir.parent.name);
            currentDir = currentDir.parent;
            break;
          }
          const found = listOfDirs.find((dir) => dir.name == dirName);
          if (found) {
            currentDir = found;
          } else {
            const newDir = new Directory(dirName, currentDir);
            listOfDirs.push(newDir);
            currentDir = newDir;
          }
        } else {
          // console.log("listing files and folders");
        }
        break;
      case "d":
        const dirName = line.split(" ")[1];
        currentDir.directories.push(new Directory(dirName, currentDir.name));

        break;

      default:
        const fileInfo = line.split(" ");
        const fileName = fileInfo[1];
        const fileSize = Number(fileInfo[0]);
        currentDir.files.push(new File(fileName, fileSize));
        break;
    }
  });
  lastChildren = listOfDirs.filter((dir) => dir.directories.length === 0);
  console.log(calcLongPath(lastChildren));
});
