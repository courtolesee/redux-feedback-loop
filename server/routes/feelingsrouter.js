const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST:', req.body);
    let queryString = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
        VALUES($1, $2, $3, $4);`
    pool.query(queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]).then ((result)=>{
        console.log('feedback inserted');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR INSERTING FEEDBACK-------->', error);
        res.sendStatus(400);
    })
})

module.exports = router;