const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText='SELECT * FROM "genres";';

  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/genre', error);
    res.sendStatus(500)
  })
});

//Get genres for the selected movie
router.get('/:id', (req, res) => {
  const queryText = `
  SELECT "genres"."name"
  FROM "movies"
  JOIN "movies_genres"
  ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres"
  ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."id"= $1;
  `;
   pool.query(queryText, [req.params.id])
   .then((result) => {
     console.log('result is', result.rows);
     
     res.send(result.rows);
   }).catch((error) => {
     console.log('Error GETting genres for the selected movie', error);
     res.sendStatus(500);
   })
});
//
module.exports = router;