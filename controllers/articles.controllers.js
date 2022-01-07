const articles = require("../models/question.model");
const url = "https://api.spaceflightnewsapi.net/v3/";

const greeting = async (req, res) => {
  try {
    res
      .status(200)
      .send("Back-end Challenge 2021 🏅 - Space Flight News")
      .end();
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getAllArticles = async (req, res) => {
  try {
    const dbArticles = await questions.find();
    res.status(200).send(dbArticles);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getArticle = async (req, res) => {
  try {
    const dbArticles = await questions.findOne();
    res.status(200).send(dbArticles);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postArticle = async (req, res) => {
  try {
    const { description, image, correct, wrong, explanation } = req.body;
    const article = await articles.create({
      description,
      image,
      correct,
      wrong,
      explanation,
    });
    res.status(201).send(article);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const modifyArticle = async (req, res) => {
  try {
    const dbArticles = await articles.update();
    res.status(200).send(dbArticles);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteArticle = async (req, res) => {
  try {
    await articles.delete();
    res.status(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  greeting,
  getAllArticles,
  getArticle,
  postArticle,
  modifyArticle,
  deleteArticle,
};
