const CategoriesModel = require("../DataService/models/category")

async function GetCategories() {
    try {
        const categories = await CategoriesModel.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt']}}
        );
        return categories;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = {
    GetCategories,
};