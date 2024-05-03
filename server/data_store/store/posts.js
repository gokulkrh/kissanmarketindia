import db from "../knex.js";
import Post from "../models/entities/posts.js";

export default {
  fetchAllCategories: async () => {
    try {
      const categories = await db.select("name", "image_url").from("categories");
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      throw error;
    }
  },

  fetchAllPosts: async () => {
    try {
      const posts = await db.select("*").from("posts");
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      throw error;
    }
  },

  fetchPostsByLocation: async () => {
    try {
      const posts = await db
        .select("*")
        .select(db.raw("ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 AS distance", [coordinates.longitude, coordinates.latitude]))
        .select(
          db.raw(
            "CASE " +
              "WHEN ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 <= 10 THEN 'within_10_km' " +
              "WHEN ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 <= 20 THEN 'within_20_km' " +
              "ELSE 'beyond_20_km' " +
              "END AS distance_category",
            [coordinates.longitude, coordinates.latitude, coordinates.longitude, coordinates.latitude]
          )
        )
        .from("posts")
        .whereRaw("ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 <= 500", [coordinates.longitude, coordinates.latitude])
        .orderBy("distance");

      return posts;
    } catch (error) {
      console.error("failed to fetch posts", error.message);
      throw error;
    }
  },

  createPost: async (post) => {
    try {
      await db.insert(post).into("posts");
    } catch (error) {
      console.log("CreatePost: ", error.message);
      throw error;
    }
  },

  getPostByID: async (postID) => {
    try {
      const post = await db.select("*").from("posts").where("post_id", postID);
      return post;
    } catch (error) {
      console.log("Get Post err", error.message);
      throw error;
    }
  },
};
