const knex = require('./connection')
const express = require('express')
const jwt = require('jsonwebtoken');
const e = require('express');
const router = express.Router();

router.post('/login',(req,res)=> {
    let a = false
    let email = req.body.email;
    let password = req.body.password;
    knex.select('*').from('user').then((data) => {
        for(i of data){
            if(i.email == email && i.password == password){
                a=true;
                let token = jwt.sign({email : i.email},"shanti")
                res.send(token)
                console.log(token);
            }
        }if(a){
            console.log("loggin");

        }else{
            console.log("not loggin");
        }
    

    }).catch((err) => {
        // res.send(err)
        console.log(err);
    })
})

router.put('/updates',(req,res) => {
    var check = jwt.verify(req.headers.authorization,"shanti")
    console.log(check.email)
    knex('user').where({email:check.email}).update(req.body).
    then(() => {
        res.send("updates successfully!!!!!")
        console.log("updates successfully!!!")
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

router.delete('/deleted',(req,res) => {
    var check = jwt.verify(req.headers.authorization,"shanti")
    console.log(check.email)
    knex('user').where({email:check.email}).del(req.body).
    then((data) => {
        res.send("deleted successfully!!!!!")
        console.log("deleted successfully!!!")
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

module.exports = router;



// router.post('/login', (req,res) => {
//     knex.select('*').from('user').then((data) => {
//         let a = false
//         let email = req.body.email;
//         let password = req.body.password;
//         for(i of data){
//             // if(i.email == email && i.password == password){
//                 // console.log('login successfully');
                
//                 if(i.email === email && i.password === password) {
//                     a = true;
//                     const jWt= jwt.sign({ email: i.email}, "secretkey") 
//                     res.cookie('secertkey',jWt)
//                     let decode = req.headers.cookie
//                     res.send.decode
            
//         } if (a){
//             console.log("loggin sucess");
//         }else{
//             console.log("invalis");
//         }
    
    
// }) 
// }   

