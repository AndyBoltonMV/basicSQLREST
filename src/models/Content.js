const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config");

const Content = sequelize.define("Content", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 140],
    },
  },
});

module.exports = Content;
