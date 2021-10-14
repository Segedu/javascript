console.log("app is loading");

const fs = require("fs");
const fileName = "encoding.txt";

fs.writeFileSync(fileName, "שלום עולם");
const data = fs.readFileSync(fileName);
console.log(data);
