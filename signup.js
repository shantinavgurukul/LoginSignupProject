const express = require('express')
const router = express.Router();
const knex = require('./connection')

router.post('/sign',(req,res) => {
    // res.send(req.body)
    knex('user').insert(req.body)
    .then(()=>{
        knex.select("*").from("user").then((data)=>{
            console.log(req.body)
            res.send(req.body)
        })
    }).catch(()=>{
        console.log("ERROR-----------------")
    })
});
            
module.exports = router;
