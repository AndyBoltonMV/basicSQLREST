require("dotenv").config();
const { sequelize } = require("./db");

module.exports = {
  sequelize,
  salt: parseInt(process.env.SALT),
  secret: process.env.SECRET,
  port: parseInt(process.env.PORT),
};
