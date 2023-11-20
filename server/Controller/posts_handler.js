import {
    GetAllCategories
} from '../Service/Posts/categories.js'
import {
    Allposts
} from '../Service/Posts/posts.js'

async function CategoriesHandler(req, res) {
    try {
        const categories = await GetAllCategories();
        res.status(200).json({categories});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

async function AllProductsHandler(req, res) {
    try {
        const posts = await Allposts();
        res.status(200).json({posts});
        return
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export {
    CategoriesHandler,
    AllProductsHandler,
};