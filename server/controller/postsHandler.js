import postsService from "../service/posts/posts.js";

export default {
  categoriesHandler: async (req, res, next) => {
    try {
      const categories = await postsService.getCategories();
      res.status(200).json({ categories });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  postsByLocationHandler: async (req, res, next) => {
    try {
      const posts = await postsService.getPostsByLocation(req.params.location);
      res.status(200).json({ posts });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  allProductsHandler: async (req, res, next) => {
    try {
      const posts = await postsService.getAllposts();
      res.status(200).json({ posts });
      return;
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getPostByIDHandler: async (req, res, next) => {
    try {
      const post = await postsService.getPostByID(req.params.postID);
      res.status(200).json({ post });
      return;
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
