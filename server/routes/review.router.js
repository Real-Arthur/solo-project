const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
 /*
 router.get('/id', (req, res) => {
    console.log('PROFILE GET', req.params.id);
    let userId = parseInt(req.params.id);
    let queryString = `
        SELECT "user"."username", "user"."about_me" FROM "user"
        WHERE "id" = $1;
    `;
    pool.query(queryString, [userId])
    .then(results => {
        console.log('Return user name and about me from db', results.rows);
        res.send(results.rows)
    })
    .catch(error => {
        console.log('profile get', error);
        res.send(error)
    })
});
*/

/**
 * POST route template
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req', req);
    
    console.log('req user id', req.user.id);
    console.log('req body movie id', req.body.movie_id);
    console.log('req body review', req.body.review_string);
    
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
        console.log('Change Review', response);
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error in review update', error);
        res.sendStatus(500);
    })
});

module.exports = router;