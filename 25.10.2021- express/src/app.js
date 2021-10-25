const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  app = express(),
  PORT = 8080;

const tasks = [{ name: "clean" }, { name: "eat" }, { name: "sleep" }];

app.use(express.static(publicPath));

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.listen(PORT);
