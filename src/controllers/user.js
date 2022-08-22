const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { secret } = require("../../config");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ id: user.id }, secret);

    res.status(200).send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.readUser = async (req, res) => {
  try {
    const users = await User.findAll({ where: req.query });

    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const token = jwt.sign({ id: req.user.id }, secret);

    res.status(200).send({ user: req.user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, { where: req.user });

    res.status(200).send({ updatedUser });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.destroy(req.user);

    res.status(200).send({ deletedUser });
  } catch (error) {
    res.status(500).send(error);
  }
};
