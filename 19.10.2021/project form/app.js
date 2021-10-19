const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.get("/city", (req, res) => {
  console.log(req.query);
  res.send(`got your answer: ${req.query.city}, and ${req.query.country}`);
});

app.listen(port);

const API_Key = "641974375fb31ab9962b7f26bce1a2a0";
const city_name ;
`api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
