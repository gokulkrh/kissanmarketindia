import Category from '../models/category.js';

async function GetCategories() {
  try {
    return await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "id"] },
    });
  } catch (error) {
    throw error;
  }
}

export {
  GetCategories,
};
