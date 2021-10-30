const express = require("express"),
  hbs = require("hbs"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  viewsPath = path.join(__dirname, "..", "templates", "views"),
  partialsPath = path.join(__dirname, "..", "templates", "partials"),
  app = express(),
  PORT = 8080;

app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);

