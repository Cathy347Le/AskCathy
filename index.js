const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(require("./routes/index"));

app.listen(5000, () => console.log("listening on port 5000"));
