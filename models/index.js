const mongoose = require("../db/connection");

module.exports = {
  Question: mongoose.model("Question", require("./question")),
  User: mongoose.model("User", require("./user"))
};
