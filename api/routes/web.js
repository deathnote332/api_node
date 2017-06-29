'use strict';
module.exports = function(app){
    var controller = require('../../api/controllers/controller')

    app.route('/users')
        .get(controller.all_users)

    app.route('/authenticate')
        .post(controller.authenticate_user)

}