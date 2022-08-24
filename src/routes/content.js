const router = require("express").Router();
const {
  createContent,
  readContent,
  readByUser,
  updateContent,
  deleteContent,
} = require("../controllers");
const { tokenCheck } = require("../middleware");

router
  .post("/", tokenCheck, createContent)
  .get("/:search", readContent)
  .get("/", readByUser)
  .put("/:id", updateContent)
  .delete("/:id", deleteContent);

module.exports = router;
