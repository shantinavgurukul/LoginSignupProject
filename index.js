const express = require('express')
const app = express();
app.use(express.json())  //this is way to transfer data betweendata base and code(search).
aa 

app.use('/' ,require('./signup'))
app.use('/',require('./login'))

app.listen(2300,()=>{
    console.log("server is running 2300")

})

