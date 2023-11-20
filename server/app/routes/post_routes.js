import { Router, json } from "express";
import {
  CategoriesHandler
} from "../../Controller/posts_handler.js"

var post_router = Router().use(json());

post_router.get("/v1/categories", CategoriesHandler);

post_router.post("/v1/products/all", );
post_router.get("/v1/products/:location");
post_router.get("/v1/products/:category")

export default post_router;
