// var express = require("express");
// var bodyParser = require("body-parser");
// var app = express();
// // app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// var port = 1600;


// const knex = require("knex")({
//     client: "mysql",
//     connection: {
//       host: "localhost",
//       user: "root",
//       password: "Shanti123#@!",
//       database: "student_details"
//     }
// })


// // knex.schema.hasTable("UserDetails").then( (exits) => {
// //     if (!exits) {
// //         return knex.schema.createTable("UserDetails",(table) => {
// //             table.increments("id").primary();
// //             table.string("FirstName",100);
// //             table.string("email",100);
// //             table.string("password",20);
            
// //         })
// //     }
// // }) 
// knex.schema.hasTable("shantiDetails").then( (exits) => {
//     if (!exits) {
//         return knex.schema.createTable('shantiDetails', (table) => {
//             table.increments("id").primary();
//             table.string("FirstName");
//             table.string("email");
//             table.string("password");
            
//         })
//             // .then(() => {
//             //     console.log("table created")
//             //     res.send("table created")
//             // .catch((err) => { console.log(err); throw err })
//             // .finally(() => {
//             //     knex.destroy();
//             // })
//     }
// })


// // app.post("/posting",function(req,res){
// //     knex('shantiDetails').insert({ 
// //             name : req.body.name,
// //             language : req.body.language
// //         })
// //         .then(()=>{
// //             knex.select('*').from('shantiDetails').then((data) =>{
// //                 console.log("table created")
// //                 res.send(data)

// //             })
// //         })   
// //         .catch((err)=>{
// //             console.log("ERROR-----------------")
// //             res.send(err)
// //         })
// // })

// app.post("/signup", (req,res) => {
//     console.log(req.body.email)
//     knex.select('email').from('shantiDetails').where('email', req.body.email)
//     .then((data) => {
//         // console.log(data)
//         if (data.length > 0){
//             res.send("your email allready used...  ")
//             console.log("your email allready used...  ")
//         }
//         else {
//             knex("shantiDetails")
//                 .insert({
//                         username : req.body.username,
//                         email : req.body.email,
//                         password : req.body.password,
//                     })
//                     .then(() => {
//                         console.log("your details are created.... ")
//                         res.send("your details are created.... ")
//                     }).catch((error) => {
//                         console.log("went wrong.... ")
//                         res.send(error)
//                     })
//         }
//     }).catch((error) => {
//         console.log(error)
//         res.send(error)
//     })
// })

// // // app.post("/login" , (req,res) => {
// // //     console.log(req.body.email, " email....")
// // //     knex.select("email").from("UserDetails").where("email", req.body.email).andWhere("password",req.body.password)
// // //     .then((data) => {
// // //         if (data.length){
// // //             console.log("congrats! " , "you have logged in successfully...  ")
// // //             res.send("logged in successfully ")
// // //         }else if (!data.length) {
// // //             console.log("Invaild email and password...! ")
// // //             res.send("Invaild email and password...!   ")
// // //         }
// // //     }).catch((err) => {
// // //         console.log(err)
// // //         res.send(err)  
// // //     })
// // });

// app.listen(port, () => {
//     console.log(`your port is running ${port}`)
// })




var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 1600;


const knex = require("knex")({
    client: "mysql",
    version: '7.2',
    connection: {
      host: "localhost",
      user: "root",
      password: "Shanti123#@!",
      database: "student_details"
    }
})


knex.schema.hasTable("shantiDetails").then( (exits) => {
    if (!exits) {
        return knex.schema.createTable("shantiDetails",(table) => {
            table.increments("id").primary();
            table.string("username",100);
            table.string("email",100);
            table.string("password",20);
        })
    }
}) 


app.post("/signup", (req,res) => {
    console.log(req.body.email)
    knex.select('email').from('shantiDetails').where('email', req.body.email)
    .then((data) => {
        if (data.length > 0){
            res.send("your email allready used...  ")
            console.log("your email allready used...  ")
        }
        else {
            knex("shantiDetails")
                .insert({
                        username : req.body.username,
                        email : req.body.email,
                        password : req.body.password,
                    })
                    .then(() => {
                        console.log("your details are created.... ")
                        res.send("your details are created.... ")
                    }).catch((error) => {
                        console.log("went wrong.... ")
                        res.send(error)
                    })
        }
    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
})

// app.post("/login" , (req,res) => {
//     console.log(req.body.email, " email....")
//     knex.select("email").from("user_details").where("email", req.body.email).andWhere("password",req.body.password)
//     .then((data) => {
//         if (data.length){
//             console.log("congrats! " , "you have logged in successfully...  ")
//             res.send("logged in successfully ")
//         }else if (!data.length) {
//             console.log("Invaild email and password...! ")
//             res.send("Invaild email and password...!   ")
//         }
//     }).catch((err) => {
//         console.log(err)
//         res.send(err)  
//     })
// });

app.listen(port, () => {
    console.log(`your port is running ${port}`)
})