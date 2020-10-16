const jwt = require('jsonwebtoken');
const shortid = require('shortid');
const secret = require('../config/config');
const secretKey = secret.settings.JWTsecret;

let generateToken = (data, cb) => {
    try{
        let claims = {
            jwtid : shortid.generate(),
            iat : Date.now(),
            /**
             * Dat.now() returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
             * and converting to seconds by dividing with 1000 and adding 86400 secs = 24hrs giving expiration after one day
             */
            exp : Math.floor(Date.now()/1000)+(60*60*24),
            //issuer
            iss : 'Dsplanner',
            sub : 'authToken',
            data : data
        }
        let tokenDetails = {
            token : jwt.sign(claims,secret.settings.JWTsecret),
            tokenSecret : secretKey
        }
        cb(null,tokenDetails)
    }
    catch(err) {
        cb(err, null)
    }
}

let verifyToken = (token, secretKey, cb) => {
    jwt.verify(token, secretKey, function(err, decoded) {
        if(err){
            console.log('Token verification error')
            cb(err, null)
        } 
        else {
            cb(null, decoded)
        }
    })
}

let verifyTokenSecret = (token, cb) => {
    jwt.verify(token, secretKey, function(err, decoded) {
        if(err){
            console.log('Token verification error')
            cb(err, null)
        }
        else {
            console.log('User verified')
            cb(null, decoded)
        }
    })
}

module.exports = {
    generateToken : generateToken,
    verifyToken : verifyToken,
    verifyTokenSecret : verifyTokenSecret   
}