const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

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

  router.get('/filmography', (req, res) => {
    // console.log('Filmography get route', req.query);
    let filmographyToGet = parseInt(req.query.id);
    // console.log('person Id', typeof(filmographyToGet));
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/person/${filmographyToGet}/movie_credits?`,
      params: {
        api_key:process.env.API_KEY
      }
    })
    .then(response => {
      console.log('filmography res', response.data.cast);
      res.send(response.data.cast)
    })
  })

module.exports = router;
