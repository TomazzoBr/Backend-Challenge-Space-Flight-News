import articles from "../models/article.model.js";
const url = "https://api.spaceflightnewsapi.net/v3/";

export const greeting = async (req, res) => {
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

export const getAllArticles = async (req, res) => {
  try {
    const dbArticles = await articles.find();
    res.status(200).send(dbArticles);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const getArticle = async (req, res) => {
  try {
    const dbArticles = await articles.findOne();
    res.status(200).send(dbArticles);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const postArticle = async (req, res) => {
  try {
    const body = req.body;
    const article = await articles.create({
      body,
    });
    res.status(201).send(article);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const modifyArticle = async (req, res) => {
  try {
    const dbArticles = await articles.update();
    res.status(200).send(dbArticles);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const deleteArticle = async (req, res) => {
  try {
    await articles.delete();
    res.status(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
