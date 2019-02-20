const express = require("express");
const router = express.Router();

router.get("/new", function(req, res) {
  res.send("Create new question");
});

router.post("/", function(req, res) {
  res.redirect("/");
});

router.get("/:id", function(req, res) {
  res.send(`show page ${req.params.id}`);
});

router.get("/:id/edit", function(req, res) {
  res.send(`edit page ${req.params.id}`);
});

router.put("/:id", function(req, res) {
  res.redirect("/");
});

router.delete("/:id", function(req, res) {
  res.redirect("/");
});

module.exports = router;
