const { response } = require('express');
const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', rejectUnauthenticated, (req, res) => {
  let userId = req.user.id;
  let movieId = req.body.movie_id;
  let movieReview = req.body.review_string;
  let queryString = `
    UPDATE "user_movie"
    SET "review" = $1
    WHERE "user_id" = $2
    AND
    "movie_id" = $3;
  `;
  pool.query(queryString, [movieReview, userId, movieId])
  .then(response => {
      console.log('change review', response);
      res.sendStatus(200)
  }).catch(error => {
      console.log('error review', error);
      res.sendStatus(500);
  })
});

module.exports = router;
