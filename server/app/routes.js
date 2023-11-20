import { Router, json } from "express";
import {
  LoginHandler,
  RegisterHandler,
  FetchUserHandler,
} from '../Controller/user_controller.js'
import {
  AllProductsHandler,
  CategoriesHandler,

} from "../Controller/posts_handler.js"

var router = Router().use(json());

router.get("/health-check", (req, res) => {
  res.send("Server is up and running");
});

router.post("/v1/users/login", LoginHandler);
router.post("/v1/users/register", RegisterHandler);
router.get("/v1/users/:username", FetchUserHandler);

router.get("/v1/categories", CategoriesHandler);
router.get("/v1/products/all", AllProductsHandler);
router.get("/v1/products/:location");
router.get("/v1/products/:category");

export default router;
