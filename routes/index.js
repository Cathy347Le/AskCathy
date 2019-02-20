const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.use("/question", require("./question.js"));

module.exports = router;
