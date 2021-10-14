const fs = require("fs");
console.log("before readFileSync");

try {
  console.log(1);
  const data = fs.readFileSync("not-exist.txt");
  console.log(data);
  console.log(2);
} catch (error) {
  console.log("error");
}
console.log(4);
