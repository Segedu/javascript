console.log("app is loading");
const fs = require("fs");
let fileName = "persons.json";

let data = fs.readFileSync(fileName, "utf8");
let convertedObj = JSON.parse(data);
console.log(convertedObj);

