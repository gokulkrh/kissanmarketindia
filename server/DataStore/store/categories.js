import { findAll } from "../DataStore/models/category";

async function GetCategories() {
  try {
    const categories = await findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "id"] },
    });
    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default {
  GetCategories,
};
