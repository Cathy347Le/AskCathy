const express = require("express");
const router = express.Router();
const Question = require("../models/index");

router.get("/", function(req, res) {
  Question.find({}).then(questions => {
    res.render("index", { questions });
  });
});

router.use("/question", require("./question.js"));

module.exports = router;
