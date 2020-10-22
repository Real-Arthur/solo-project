const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/add', rejectUnauthenticated, (req, res) => {
  console.log('library post body', req.body);
  let queryString = `
    INSERT INTO "movie" ("id", "title", "overview", "release_date", "poster_path")
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT ("id") DO 
    UPDATE
    SET "title" = $2,
      "overview" = $3,
      "release_date" = $4,
      "poster_path" = $5
    ;`;
  pool.query(queryString, [req.body.id, req.body.title, req.body.overview, req.body.release_date, req.body.poster_path])
  .then(response => {
    console.log('Added to library', response);
    res.sendStatus(200)
  })
  .catch(error => {
    console.log('Error Library Post', error);
    res.sendStatus(500)
  })
});

module.exports = router;
