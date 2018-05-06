var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');
var FormErrors = require('../helpers/FormErrors.js');

// Models
var User = require('../models/User.js');

router.post('/', function(req, res) {
    var formErrors = new FormErrors(req, {
        requiredFields: [
            {
                key: 'oldPassword',
                label: 'old password'
            },
            {
                key: 'newPassword',
                label: 'new password'
            }
        ]
    });

    if( formErrors.any() ) {
        res
            .status(400)
            .send( formErrors.get() );
    } else {
        User.findOne({
            username: req.body.username
        }, function(err, user) {
            if (err) throw err;

            if (!user) {
                formErrors.set('username', 'Username does not exist');
                res
                    .status(401)
                    .send( formErrors.get() );
            } else {
                // check if password matches
                user.comparePassword(req.body.oldPassword, function (err, isMatch) {
                    if (isMatch && !err) {
                        user.password = req.body.newPassword;
                        user.save(function (err, updatedUser) {
                            if (err) return handleError(err);
                            res
                                .status(200)
                                .send();
                        });
                    } else {
                        formErrors.set('oldPassword', 'Wrong password');
                        res
                            .status(401)
                            .send( formErrors.get() );
                    }
                });
            }
        });
    }
});

module.exports = router;