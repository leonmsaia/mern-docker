const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/web');
const medium = require('../services/medium');
const academia = require('../services/academia');

router.get('/medium', async function(req, res, next) {
    try {
        // res.json(await programmingLanguages.getPosts(req.query.page));
        res.json(await medium.getArticlesOnline());
    } catch (err) {
        console.error(`Error while getting posts `, err.message);
        next(err);
    }
});

router.get('/academia', async function(req, res, next) {
    try {
        res.json(await academia.getArticles());
    } catch (err) {
        console.error(`Error while getting posts `, err.message);
        next(err);
    }
});

module.exports = router;