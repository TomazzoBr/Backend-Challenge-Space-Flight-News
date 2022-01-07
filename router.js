const express = require("express");
const router = express.Router();
const articles = require("./controllers/articles.controllers");

router.get("/", articles.greeting);
router.get("/articles", articles.getAllArticles);
router.get("/articles/:id", articles.getArticle);
router.post("/articles/", articles.postArticle);
router.put("/articles/:id", articles.modifyArticle);
router.delete("/articles/:id", articles.deleteArticle);

module.exports = router;

// [GET]/:  Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"

// [GET]/articles/:   Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST

// [GET]/articles/{id}: Obter a informação somente de um artigo

// [POST]/articles/: Adicionar um novo artigo

// [PUT]/articles/{id}: Atualizar um artigo baseado no id

// [DELETE]/articles/{id}: Remover um artigo baseado no id
