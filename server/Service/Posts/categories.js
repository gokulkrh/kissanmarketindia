import {
  FetchAllCategories
} from '../../DataStore/store/posts.js'

export async function GetCategories() {
  try {
    const categories = await FetchAllCategories();
    return categories;
  } catch (error) {
    console.error(error)
  }
} 