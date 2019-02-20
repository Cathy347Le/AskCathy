const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("Question", QuestionSchema);
