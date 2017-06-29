var config = require('../../api/app/config');

var users = config.connection.extend({
    tableName:'users'
})

module.exports = {
    'users': new users()
}

