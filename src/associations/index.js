const { sequelize } = require("../../config/db");
const { User, Content } = require("../models");

(async () => {
  Content.belongsTo(User);
  User.hasMany(Content);
  await sequelize.sync();
})();
