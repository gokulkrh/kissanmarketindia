import PostsModel from "../models/post";

async function GetAllPosts() {
  try {
    return await PostsModel.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default {
  GetAllPosts,
};
