const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('COLLECTION ROUTER GET', req.params.id);
    let userId = parseInt(req.params.id);
    let queryString = `
      SELECT DISTINCT "movie"."id", "movie"."title", "movie"."overview", "movie"."release_date", "movie"."poster_path", "user_movie"."review"
      FROM "user_movie"
      JOIN "user"
      ON "user_movie"."user_id" = "user"."id"
      JOIN "movie"
      ON "user_movie"."movie_id" = "movie"."id"
      WHERE "user_id" = $1
      ORDER BY "title" ASC
      ;`;
    pool.query(queryString, [userId])
    .then(results => {
      console.log('Return from db', results.rows);
      // res.send(results.rows);
      // GETTING AN ERROR FROM res.sendStatus(200)
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('library GET: ', error);
      res.send(error);
    })
  });

router.post('/add', rejectUnauthenticated, (req, res) => {
  // console.log('req user id', req.user.id);
  // console.log('req body movie id', req.body.movie_id);
  let userId = req.user.id;
  let movieId = req.body.movie_id;
  let movieReview = '';
  let queryString = `INSERT INTO "user_movie" ("user_id", "movie_id", "review")
    VALUES ($1, $2, $3);`;
  pool.query(queryString, [userId, movieId, movieReview])
  .then(response => {
      console.log('Added to collection', response);
      res.sendStatus(200);
  }).catch(error => {
    console.log('error in collection post', error);
      res.sendStatus(500);
  })
});

router.delete('/delete', rejectUnauthenticated, (req, res) => {
  console.log('req body', req.body);
  let userId = req.body.id;
  let movieId = req.body.movie
  console.log('userId and movieId', userId, movieId);
  let queryString = `DELETE FROM "user_movie"
    WHERE "user_id" = $1
    AND
    "movie_id" = $2;`;
  pool.query(queryString, [userId, movieId])
  .then(response => {
    res.sendStatus(200)
  })
  .catch(error => {
    res.sendStatus(500)
  })
})

module.exports = router;