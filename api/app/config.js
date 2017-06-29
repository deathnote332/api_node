'use strict';

const MySql = require('mysql-model');


const connection = MySql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'papersllc_db'
});



module.exports = {
    'secret': 'helloworld',
    'connection': connection
}