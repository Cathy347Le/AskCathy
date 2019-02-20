const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/AskCathy");
mongoose.Promise = Promise;

module.exports = mongoose;
