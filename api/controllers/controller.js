'use strict';
var model = require('../../api/models/user');
var config = require('../../api/app/config');
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
var express = require('express');
var app = express();

app.set('superSecret',config.secret)

exports.all_users = function(req,res){
    model.users.find(function(err,user){
        res.json(user)
    })
}

exports.authenticate_user =  function(req,res){
        model.users.find('all',{where: 'username='+'"'+req.body.username+'"'},function(err,user){
            if(!user){
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            }else{
                var hash = user[0].password.replace('$2y$', '$2a$');
                bcrypt.compare(req.body.password, hash, function(err, res1) {
                    if(res1){
                        console.log(app.get('superSecret'))
                        var token = jwt.sign({data:user},app.get('superSecret'),{
                            expiresIn: '1d'
                        })

                        res.json({
                            success: true,
                            message:'Login successfully',
                            token: token
                        })

                    }else{
                        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    }
                });
            }


        })
}

