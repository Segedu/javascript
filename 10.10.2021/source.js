//! 1.a
// function printArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(sum);
// }
// let newArr = [1, 2, 3, 4, 5, 6, 7];
// printArray(newArr);

//! 1.b
// const chalk = require("chalk");
// function printArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(chalk.blue(sum));
// }
// let newArr = [1, 2, 3, 4, 5, 6, 7];
// printArray(newArr);

//! 1.c
// const chalk = require("chalk");
// function printArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(chalk.bold.yellow(sum));
// }
// let randArr = [20, 30, 40, 50, 60];
// printArray(randArr);

//! 1.d
// const fs = require("fs");

// function printToTextFile(text) {
//   fs.appendFile("./10.10.2021/only text.txt", text, (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log(text);
//   });
// }
// printToTextFile("hello world this is home-work file");

//! 1.e
// const fs = require("fs");
// function printToFileAsync(fileName) {
//   fs.appendFile("./10.10.2021/only text.txt", fileName, (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log(fileName);
//   });
// }
// printToFileAsync("only text.txt");

//! 1.f
// const fs = require("fs");
// function printToFileSync(fileName) {
//   fs.appendFileSync("./10.10.2021/only text.txt", fileName, (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log(fileName);
//   });
// }
// printToFileSync("only text.txt");

//! 1.g
// const fs = require("fs");
// function printTextToFileByFileName(fileName, text) {
//   fs.appendFile("./10.10.2021/only text.txt", text, (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log(fileName, text);
//   });
// }
// printTextToFileByFileName(
//   " only text.txt",
//   " this assignment is about node.js"
// );

//!2

//!3
// מודולים צד שלישי חוסכים לנו זמן במציאת פתרון לבעיה מכיוון שרוב הבעיות לא חדשות והן נשאלו ונענו בפורומים כאלה או אחרים של מפתחים. ספריות צד שלישי פשוט מפשוטות את התהליך בכך שהן מנגישות קטעי קוד לשימושנו.
//!4
// מודלים מובנים הם קטעי קוד וקיצורים המגיעים יחד עם השפה בה מתכנתים.
// מודולים צד שלישי הן ספריות או קטעי קוד שנכתבו ע"י מפתחים עצמאיים או מפתחים של חברה/ארגון ונכתבו בקוד פתוח לשימוש כלל המפתחים ע"י ייבוא שלהם לפרויקט של כל אחד.
// מודולים של המפתח נכתבים על ידו על מנת למצוא פתרון מדויק לבעיה הספציפית שלו במהלך הכתיבה.
