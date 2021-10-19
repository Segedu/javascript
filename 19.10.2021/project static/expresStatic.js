const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
const publicPath = path.join(__dirname, "public");
// app.set("view engine", "hbs");

app.use(express.static(publicPath));

// app.get("/links", (req, res) => {
// res.render("links", {
// navLinks: () });
// });

app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
