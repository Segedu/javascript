//!1
// console.log("hello world");
// let a = 2;
// let b = 5;
// console.log(a);

//!2
// console.log(process.argv);
// const printLogs = process.argv[2];
// if (printLogs == "1") {
//   console.log("true condition print logs");
// } else {
//   console.log("false condition doesn't print logs");
// }

//!3
// let num1 = Number(process.argv[2]);
// let num2 = Number(process.argv[3]);
// console.log(`sum is: ${num1} + ${num2}`);

//!4

// function sumNums() {
//   let num1 = Number(process.argv[3]);
//   let num2 = Number(process.argv[4]);
//   let sum = num1 + num2;
//   console.log(`The result is: ${sum}`);
// }

// function reduceNums() {
//   let numb1 = Number(process.argv[3]);
//   let numb2 = Number(process.argv[4]);
//   let reduce = numb1 - numb2;
//   console.log(`the result is: ${reduce}`);
// }

// let operator = process.argv[2];

// if (operator == "+") {
//   sumNums();
// } else if (operator == "-") {
//   reduceNums();
// } else {
//   console.log("wrong operator");
// }

//!5
// const fs = require("fs");
// const file = "new.text";

//---write sync
// fs.writeFileSync(file, "hello sync");
// console.log("after write file sync");

// ---append data
// fs.writeFileSync(file, " hello world!!", { flag: "a" });
// console.log("after write file sync");

//!6
// const fs = require("fs");
// const file = "class.text";
// let mode = process.argv[2];

// if (mode == "a") {
//   fs.writeFileSync(file, "UPDATED TEXT", { flag: mode });
//   console.log(` The chosen mode is ${mode}`);
// }

//!7
let nums = [3, 1, 8, 9, 4, 6, 45, 12, 77],
  num = 4;

function checkValue(value) {
  return value == num;
}

const result = nums.find(checkValue);
if (result == undefined) {
  console.log("not exist");
} else {
  console.log(`${num} exist`);
}
