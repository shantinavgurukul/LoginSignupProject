const express = require('express')
const router = express.Router();
const knex = require('./connection')

router.post('/sign',(req,res) => {
    knex.select('email').from('user').where('email',req.body.email)
    .then((data) => {
        if(data.length > 0){
            console.log("user allready exits!!");
            res.send(" user allready exits !!")

        }else{
            knex ('user')
                .insert({
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    email : req.body.email,
                    password : req.body.password
                })
                .then(()=>{
                    console.log("created");
                    res.send(req.body)
                })
                .catch((err) => {
                    res.send(err)
                    console.log(err);
                })
        }

    })
    .catch((err) => {
        console.log(err)
        res.send(err)
    })
    
})
module.exports = router;
