console.log("app is loading...");
const fs = require("fs");
const fileName = "persons.json";

if (process.argv[2] == undefined || process.argv[3] == undefined) {
  console.error("wrong input");
  return;
}

const name = process.argv[2];
const age = Number(process.argv[3]);

let persons = [];
if (fs.existsSync(fileName)) {
  console.log("file exist");
  let person = fs.readFileSync(fileName, "utf8");
  JSON.parse(person);
} else {
  console.log("not exist");
}

const person = { name: name, age: age };
persons.push(person);
fs.writeFileSync(fileName, JSON.stringify(persons));

console.log(persons);
