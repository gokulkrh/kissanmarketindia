import { Router, json } from "express";

import postsController from "../controller/postsHandler.js";
import usersController from "../controller/userController.js";
import filesController from "../controller/filesController.js";

var router = Router().use(json());

router.get("/health-check", (req, res) => {
  res.status(200).send("<h1>Hello World!!</h1>");
});

router.get("/api/v1/users/:username", usersController.getUserHandler);
router.post("/api/v1/users/login", usersController.userLoginHandler);
router.post("/api/v1/users/register", usersController.registerUserHandler);
router.put("/api/v1/users/:username", usersController.updateUserHandler);
// router.get("/api/sessions/oauth/google", GoogleOauthHandler);

router.get("/api/v1/categories/list", postsController.categoriesHandler);
router.get("/api/v1/posts/all", postsController.allProductsHandler);
router.get("/api/v1/posts/loc/:location", postsController.postsByLocationHandler);
router.get("/api/v1/posts/:postID", postsController.getPostByIDHandler);
router.get("/api/v1/posts/category/:category");
router.post("/api/v1/posts/create");
router.put("/api/v1/posts/update");

router.post("/api/v1/static/images/posts", filesController.uploadProductImagesHandler);
router.post("/api/v1/static/images/prof", filesController.uploadProfilePicHandler);

export default router;
