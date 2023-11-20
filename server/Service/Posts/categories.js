import {
  GetCategories
} from '../../DataStore/store/categories.js'

export async function GetAllCategories() {
  try {
    const categories = await GetCategories();
    return categories;
  } catch (error) {
    console.error(error)
  }
}