import articles from "../models/article.model.js";
import fetch from "node-fetch";
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
    const dbArticles = await fetch(`${url}articles`);
    const response = await dbArticles.json();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const getArticle = async (req, res) => {
  try {
    const dbArticles = await articles.find({ id: req.params.id });
    // const response = await dbArticles.json();
    console.log(dbArticles);
    res.status(200).send(dbArticles);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const postArticle = async (req, res) => {
  try {
    const {
      id,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      updatedAt,
      featured,
      launches,
      events,
    } = req.body;
    const article = await articles.create({
      id,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      updatedAt,
      featured,
      launches,
      events,
    });
    res.status(201).send(article);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const modifyArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...data } = req.body;
    const articleToUpdate = await articles.updateMany({
      where: id,
      data: data,
    });
    res.status(200).send(articleToUpdate);
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
