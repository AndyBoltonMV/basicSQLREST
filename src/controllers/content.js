const { Content } = require("../models");

exports.createContent = async (req, res) => {
  try {
    const content = await Content.create(req.body);
    await req.user.addContent(content);

    res.status(200).send({ content });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.readContent = async (req, res) => {
  try {
    const foundContent = await Content.findAll({
      where: { content: { [Op.substring]: req.params.search } },
    });

    res.status(200).send({ foundContent });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.readByUser = async (req, res) => {
  try {
    const foundContent = await req.user.getContents();

    res.status(200).send({ foundContent });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateContent = async (req, res) => {
  try {
    const updatedContent = await Content.update(req.body, {
      where: req.params.id,
    });

    res.status(200).send({ updatedContent });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const deletedContent = await Content.destroy({ where: req.params.id });

    res.status(200).send({ deletedContent });
  } catch (error) {
    res.status(500).send(error);
  }
};
