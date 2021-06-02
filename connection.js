require('dotenv').config()
// console.log(process.env);
const knex = require('knex')({
    client : 'mysql',
    connection : {
        host : process.env.HOST,
        user : 'root',
        password : process.env.PASSWORD,
        database : process.env.DATABASE
    }
})

knex.schema.hasTable('user').then( (exits) =>{
    if(!exits){
        return knex.schema.createTable('user',(t) => {
            t.increments("id").primary();
            t.string('firstName');
            t.string('lastName');
            t.string('email');
            t.string("password")
        })
    }else{
        // console.log(" Table Created!!!!!!!!!!!!!!!!!");
    }

})
module.exports = knex;