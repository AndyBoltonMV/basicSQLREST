require("dotenv").config();
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./local.db",
});
