import {
  FetchPostsByLocation,
  FetchAllPosts,
  CreatePost,
} from "../../DataStore/store/posts.js";

import GetLocationCoordinates from "../../DataStore/store/places.js";
import Post from "../../DataStore/models/entities/posts.js";

async function PostsByLocation(location) {
  try {
    const place = await GetLocationCoordinates(location);
    const coordinates = {
      latitude: place[0].latitude,
      longitude: place[0].longitude,
    };
    const posts = await FetchPostsByLocation(coordinates);
    return posts;
  } catch (error) {
    console.error("failed to fetch posts: ", error.message);
    throw error;
  }
}

async function Allposts() {
  try {
    const posts = await FetchAllPosts();
    return posts;
  } catch (error) {
    throw error;
  }
}

async function CreatePosts(reqBody) {
  // let post = new Post(
  //   reqBody.
  // );

  try {
  } catch (error) {
    throw error;
  }
}

export { PostsByLocation, Allposts, CreatePost };
