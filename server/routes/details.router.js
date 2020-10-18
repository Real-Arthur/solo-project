const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('Details req', req.query.movieId);
  let movieId = req.query.movieId;
  axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: {
    api_key: process.env.API_KEY,
    }
  })
  .then(response => {
    console.log('res', response.data);
    res.send(response.data)
  })
  .catch(error => {
    console.log('error', error);
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;