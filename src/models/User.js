const { DataTypes } = require("sequelize");
const { hashSync } = require("bcryptjs");
const { sequelize, salt } = require("../../config");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (entry) => {
        entry.pass = hashSync(entry.pass, salt);
      },
    },
  }
);

module.exports = User;
