const questions = require("../models/question.model");
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
    const dbQuestion = await questions.find();
    res.status(200).send(dbQuestion);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getArticle = async (req, res) => {
  try {
    const dbQuestion = await questions.findOne();
    res.status(200).send(dbQuestion);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postQuestion = async (req, res) => {
  try {
    const { description, image, correct, wrong, explanation } = req.body;
    const question = await questions.create({
      description,
      image,
      correct,
      wrong,
      explanation,
    });
    res.status(201).send(question);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  greeting,
  getAllArticles,
  getArticle,
  postQuestion,
};
