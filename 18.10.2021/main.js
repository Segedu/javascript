console.log("app is loading");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const localHost = `127.0.0.1:${port}`;
console.log(`app is running here: ${localHost}`);

//! before creating the file
// app.get("/about", (request, response) => {
//   response.send(`<h1>about page</h1>`);
// });
// app.get("/", (request, response) => {
//   response.send(`<h1 style="color:red">home page</h1>`);
// });

//! with files
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/index", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "about.html"));
});
app.get("/support", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "support.html"));
});
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "pageNotFound.html"));
});
app.listen(port);
