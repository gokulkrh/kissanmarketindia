const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Server is up and running");
});

router.get('/v1/categories', (req, res) => {
    res.send({name: "Fruits and Vegetables"})
})

module.exports = router;