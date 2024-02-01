import { Router, json } from "express";
import {
  RegisterHandler,
  LoginHandler,
} from "../Controller/user_controller.js";
import {
  AllProductsHandler,
  CategoriesHandler,
  PostsByLocationHandler,
} from "../Controller/posts_handler.js";

var router = Router().use(json());

router.get("/health-check", (req, res) => {
  res.send("Server is up and running");
});

// router.get("/v1/users/:username", FetchUserHandler);
router.post("/v1/users/login", LoginHandler);
router.post("/v1/users/register", RegisterHandler);
// router.put("/v1/users/:username", UpdateUserHandler);

router.get("/v1/categories", CategoriesHandler);
router.get("/v1/posts/all", AllProductsHandler);
router.get("/v1/posts/:location", PostsByLocationHandler);
router.get("/v1/posts/:category");
router.post("/v1/posts/create");

router.post("/v1/images/upload");

export default router;
