const PostsService = require("../services/posts")


async function categoriesHandler(req, res) {
    try {
        const categories = await PostsService.GetCategories();
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({error: "failed to fetch data"});
    }
}

const productsHandler = (req, res) => {
    res.send({name: "Apple"})
}

module.exports = {
    categoriesHandler,
    productsHandler
};