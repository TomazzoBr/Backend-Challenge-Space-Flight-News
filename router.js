import { Router } from "express";
const router = Router();
import {
  greeting,
  getAllArticles,
  getArticle,
  postArticle,
  modifyArticle,
  deleteArticle,
} from "./controllers/articles.controllers.js";

router.get("/", greeting);
router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticle);
router.post("/articles", postArticle);
router.put("/articles/:id", modifyArticle);
router.delete("/articles/:id", deleteArticle);

export default router;

// [GET]/:  Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"

// [GET]/articles/:   Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST

// [GET]/articles/{id}: Obter a informação somente de um artigo

// [POST]/articles/: Adicionar um novo artigo

// [PUT]/articles/{id}: Atualizar um artigo baseado no id

// [DELETE]/articles/{id}: Remover um artigo baseado no id
