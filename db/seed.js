const Question = require("../models/index");

Question.remove({}).then(function() {
  Question.create({
    title: "Bryce Harper",
    description: "Which baseball team will sign Bryce Harper?"
  });
  Question.create({
    title: "San Francisco Giants",
    description: "Who will be the next manager for the San Francisco Giants?"
  });
  Question.create({
    title: "Manny Machado",
    description: "Which baseball team will sign Manny Machado?"
  });
});
