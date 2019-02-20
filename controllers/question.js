module.exports = {
  new: function(req, res) {
    res.send("Create new question");
  },
  create: function(req, res) {
    res.redirect("/");
  },
  show: function(req, res) {
    res.send(`show page ${req.params.id}`);
  },
  edit: function(req, res) {
    res.send(`edit page ${req.params.id}`);
  },
  update: function(req, res) {
    res.redirect("/");
  },
  delete: function(req, res) {
    res.redirect("/");
  }
};
