const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  title: String,
  description: String
});

module.exports = QuestionSchema;
