import {
    GetAllPosts,
} from '../../DataStore/store/posts.js'

async function PostsByCategory() {};

async function PostsByLocation() {};

async function Allposts() {
    try {
        return await GetAllPosts();
    } catch (error) {
        throw error;
    }
};
// try {
//     const categories = await GetCategories();
//     return categories;
//   } catch (error) {
//     console.error(error)
//   }
export {
    PostsByCategory,
    PostsByLocation,
    Allposts,
};