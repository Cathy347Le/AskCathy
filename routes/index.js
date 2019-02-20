const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.send("This is the homepage");
});

router.use("/question", require("./question.js"));

module.exports = router;
