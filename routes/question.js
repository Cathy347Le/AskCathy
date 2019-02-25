const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question");

const authUser = require("../utils/authUser");

router.get("/new", authUser, questionController.new);

router.post("/", questionController.create);

router.get("/:id", authUser, questionController.show);

router.get("/:id/edit", questionController.edit);

router.put("/:id", questionController.update);

router.delete("/:id", questionController.delete);

module.exports = router;
