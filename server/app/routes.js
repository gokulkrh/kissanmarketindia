const express = require('express'),
    postController = require('../controllers/posts-controller')
    router = express.Router();

    
router.get('/', (req, res) => {
    res.send("Server is up and running");
});

router.get('/v1/categories', postController.categoriesHandler)

router.post('/v1/users/login')
router.post('/v1/users/register')
router.post('/v1/products/all')

module.exports = router;