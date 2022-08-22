const jwt = require("jsonwebtoken");
const { compareSync } = require("bcryptjs");
const { User } = require("../models");
const { secret } = require("../../config");

exports.comparePass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ where: { username: req.body.username } });
    if (req.user && compareSync(req.body.pass, req.user.pass)) {
      next();
    } else {
      throw new Error("Incorrect credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.tokenCheck = async (req, res, next) => {
  try {
    const token = jwt.verify(
      req.headers("Authorization").replace("Bearer ", ""),
      secret
    );
    req.user = await User.findByPk(token.id);

    if (req.user) {
      next();
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
