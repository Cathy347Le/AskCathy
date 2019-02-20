const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(5000, () => console.log("listening on port 5000"));
