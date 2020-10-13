const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();
require('dotenv').config();

/**
 * GET route template
 */
router.get('/title', (req, res) => {
  // GET route code here
    console.log('req query', req.query.title);
    let movieTitle = req.query.title;
    axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: process.env.API_KEY,
            query: movieTitle,
            page: 1
        }
    })
    .then(response => {
        console.log('res data data', response.data.results);
        res.send(response.data.results)
    })
    .catch(error => {
        console.log('error', error);
        res.sendStatus(500)
    })
    
});

router.get('/name', (req, res) => {
console.log('req query', req.query);

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;