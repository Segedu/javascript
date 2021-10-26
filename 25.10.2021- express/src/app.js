const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  app = express(),
  PORT = 8080;

const tasks = [
  { name: "clean", isComplited: true },
  { name: "eat", isComplited: false },
  { name: "sleep", isComplited: true },
];

app.use(express.static(publicPath));

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.listen(PORT);
