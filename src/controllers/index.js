const {
  createUser,
  readUser,
  login,
  updateUser,
  deleteUser,
} = require("./user");

const {
  createContent,
  readContent,
  readByUser,
  updateContent,
  deleteContent,
} = require("./content");

module.exports = {
  createUser,
  readUser,
  login,
  updateUser,
  deleteUser,
  createContent,
  readContent,
  readByUser,
  updateContent,
  deleteContent,
};
