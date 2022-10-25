const  user = require('../models/users.model');
const cryto = require('crypto');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    let hashepass = cryto.createHash("sha512").update(req.body.pass).digest('hex');

    user.findOne( {
        user: req.body.user,
        pass: hashepass,
        },
        (err, user) => {
            let response = {
                token: null 
            }

            if (user != null) {
                response.token = jwt.sign({
                    id: user._id,
                    user: user.user                   
                }, "__recret__")
            } 
            res.json(response);
        }
    )
} 