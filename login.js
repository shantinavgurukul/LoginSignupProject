const knex = require('./connection')
const express = require('express')
const router = express.Router();

router.post('/login', (req,res) => {
    knex.select('*').from('user').then((data) => {
        let a = false
        let email = req.body.email;
        let password = req.body.password;
        for(i of data){
            if(i.email == email && i.password == password){
                // console.log('login successfully');
                a = true;
            }
            
        } if (a){
            res.send(req.body)
            console.log("login success");
        }else{
            res.send("invalid data!!!!!")
            console.log("invalid data");
        }
    })
})

module.exports = router;