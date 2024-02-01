import db from "../knex.js";

async function FetchAllCategories() {
  try {
    const categories = await db.select("name", "image_url").from("categories");
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    throw error;
  }
}

async function FetchAllPosts() {
  try {
    const posts = await db.select("*").from("posts"); // TODO: add is deleted or similar fields for expired ads
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
}

async function FetchPostsByLocation(coordinates) {
  try {
    const posts = await db
      .select("*")
      .select(
        db.raw(
          "ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 AS distance",
          [coordinates.longitude, coordinates.latitude]
        )
      )
      .select(
        db.raw(
          "CASE " +
            "WHEN ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 <= 10 THEN 'within_10_km' " +
            "WHEN ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 <= 20 THEN 'within_20_km' " +
            "ELSE 'beyond_20_km' " +
            "END AS distance_category",
          [
            coordinates.longitude,
            coordinates.latitude,
            coordinates.longitude,
            coordinates.latitude,
          ]
        )
      )
      .from("posts")
      .whereRaw(
        "ST_DISTANCE_SPHERE(POINT(?, ?), POINT(longitude, latitude))/1000 <= 500",
        [coordinates.longitude, coordinates.latitude]
      )
      .orderBy("distance");

    return posts;
  } catch (error) {
    console.error("failed to fetch posts", error.message);
    throw error;
  }
}

async function CreatePost(post) {
  try {
    await db.insert(post).into("posts");
  } catch (error) {
    console.log("CreatePost: ", error.message);
    throw error;
  }
}

export { FetchAllCategories, FetchAllPosts, FetchPostsByLocation, CreatePost };
