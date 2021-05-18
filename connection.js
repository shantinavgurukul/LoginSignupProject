const knex = require('knex')({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : "Shanti123#@!",
        database : 'student_details'
    }
})

knex.schema.hasTable('user').then( (exits) =>{
    if(!exits){
        return knex.schema.createTable('user',(t) => {
            t.increments("id").primary();
            t.string('firstName',50);
            t.string('lastName',40);
            t.string('email',40);
            t.string("password",20)
        })
    }

})
module.exports = knex;