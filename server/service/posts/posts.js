import postsStore from "../../dataStore/store/posts.js";

import GetLocationCoordinates from "../../dataStore/store/places.js";
import Post from "../../dataStore/models/entities/posts.js";

export default {
  getCategories: async () => {
    try {
      const categories = await postsStore.fetchAllCategories();
      return categories;
    } catch (error) {
      console.error(error);
    }
  },

  getPostsByLocation: async () => {
    try {
      const place = await GetLocationCoordinates(location);
      const coordinates = {
        latitude: place[0].latitude,
        longitude: place[0].longitude,
      };
      const posts = await postsStore.fetchPostsByLocation(coordinates);
      return posts;
    } catch (error) {
      console.error("failed to fetch posts: ", error.message);
      throw error;
    }
  },

  getAllposts: async () => {
    try {
      const posts = await postsStore.fetchAllPosts();
      return posts;
    } catch (error) {
      throw error;
    }
  },

  getPostByID: async (postID) => {
    try {
      const post = await postsStore.getPostByID(postID);
      return post;
    } catch (error) {
      throw error;
    }
  },

  createPost: async () => {},
};
