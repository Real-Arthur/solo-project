const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('req query person get', req.query.name);
    let personName = req.query.name;
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/person',
      params: {
      api_key: process.env.API_KEY,
      query: personName,
      page: 1
      }
    })
    .then(response => {
      console.log('res', response.data.results);
      res.send(response.data.results)
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
