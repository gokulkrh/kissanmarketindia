import { Router, json } from "express";
import postsController from "../controller/posts_handler.js";

var router = Router().use(json());

router.get("/health-check", (req, res) => {
  res.status(200).send("<h1>Hello World!!</h1>");
});

// router.get("/v1/users/:username", FetchUserHandler);
// router.post("/v1/users/login", LoginHandler);
// router.post("/v1/users/register", RegisterHandler);
// router.get("/api/sessions/oauth/google", GoogleOauthHandler);
// router.put("/v1/users/:username", UpdateUserHandler);

router.get("/api/v1/categories", postsController.categoriesHandler);
router.get("/api/v1/posts/all", postsController.allProductsHandler);
router.get("/v1/posts/loc/:location", postsController.postsByLocationHandler);
router.get("/api/v1/posts/:postID", postsController.getPostByIDHandler);
router.get("/api/v1/posts/category/:category");
router.post("/api/v1/posts/create");

router.post("/api/v1/images/upload");

export default router;
