const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  console.log('LIBRARY ROUTER GET', req.params.id);
  let userId = parseInt(req.params.id);
  let queryString = `SELECT "movie"."title", "movie"."overview", "movie"."release_date", "movie"."poster_path" FROM "user_movie"
  JOIN "user"
  ON "user_movie"."user_id" = "user"."id"
  JOIN "movie"
  ON "user_movie"."movie_id" = "movie"."id"
  WHERE "user_id" = $1;`;
  pool.query(queryString, [userId])
  .then(results => {
    console.log('Return from db', results.rows);
    res.send(results.rows);
    // GETTING AN ERROR FROM res.sendStatus(200)
    // res.sendStatus(200);
  })
  .catch((error) => {
    console.log('library GET: ', error);
  res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;