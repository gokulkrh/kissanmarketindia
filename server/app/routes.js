import { Router } from "express";
import {
  LoginHandler,
  RegisterHandler,
  FetchUserHandler,
} from "../controllers/users/user.js";

var router = Router();

router.get("/status", (req, res) => {
  res.send("Server is up and running");
});

router.get("/v1/categories");

router.post("/v1/users/login", LoginHandler);
router.post("/v1/users/register", RegisterHandler);
router.get("/v1/users/:username", FetchUserHandler);

router.post("/v1/products/all");
router.get("/v1/products/:location");

export default router;
