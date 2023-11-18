import { Router } from "express";
import {
  LoginHandler,
  RegisterHandler,
  FetchUserHandler
} from '../Controller/user_controller.js'

import {
  CategoriesHandler
} from "../Controller/posts_handler.js"

var router = Router();

router.get("/health-check", (req, res) => {
  res.send("Server is up and running");
});

router.get("/v1/categories", CategoriesHandler);

router.post("/v1/users/login", LoginHandler);
router.post("/v1/users/register", RegisterHandler);
router.get("/v1/users/:username", FetchUserHandler);

router.post("/v1/products/all");
router.get("/v1/products/:location");
router.get("/v1/products/:category")

export default router;
