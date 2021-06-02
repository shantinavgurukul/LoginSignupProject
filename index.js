const express = require('express')
// const dotenv = require('dotenv').config()
const app = express();
app.use(express.json())  //this is way to transfer data betweendata base and code(search).

app.use('/' ,require('./signup'))
app.use('/',require('./login'))


// SERVER RUNNING WITH PORT 2300
app.listen(process.env.PORT || 2300,()=>{
    console.log("server is running 2300")

})

