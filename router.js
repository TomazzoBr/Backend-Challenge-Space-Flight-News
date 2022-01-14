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
import CronJob from "cron";

const job = new CronJob("* 9 * * * *", function () {
  router.get("/articles", getAllArticles);
});
job.start();

router.get("/", greeting);
router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticle);
router.post("/articles", postArticle);
router.put("/articles/:id", modifyArticle);
router.delete("/articles/:id", deleteArticle);

export default router;
