const router = require("express").Router();
const {
  createUser,
  readUser,
  login,
  updateUser,
  deleteUser,
} = require("../controllers");
const { comparePass, tokenCheck } = require("../middleware");

router
  .post("/", createUser)
  .post("/login", comparePass, login)
  .get("/", readUser)
  .get("/login", tokenCheck, login)
  .patch("/", tokenCheck, updateUser)
  .delete("/", tokenCheck, deleteUser);

module.exports = router;
