const Question = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("question/new");
  },
  create: function(req, res) {
    const { title, description } = req.body;
    Question.create({
      title,
      description
    }).then(question => {
      res.redirect(`/question/${question.id}`);
    });
  },
  show: function(req, res) {
    Question.findById(req.params.id).then(question => {
      res.render("question/show", { question });
    });
  },
  edit: function(req, res) {
    Question.findById(req.params.id).then(question => {
      res.render("question/edit", { question });
    });
  },
  update: function(req, res) {
    res.redirect("/");
  },
  delete: function(req, res) {
    res.redirect("/");
  }
};
