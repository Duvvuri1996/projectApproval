const express = require('express');

class Config {
    constructor(port, db, allowedCORSorigin, env, apiVersion, JWTsecret){
        this.port = port;
        this.db = db;
        this.allowedCORSorigin = allowedCORSorigin;
        this.env = env;
        this.apiVersion = apiVersion,
        this.JWTsecret = JWTsecret
    }

    configSettings () {
        return this.details = {
            port : this.port,
            db : this.db,
            allowedCORSorigin : this.allowedCORSorigin,
            env : this.env,
            apiVersion : this.apiVersion,
            JWTsecret : this.JWTsecret
        }
    }
}

var config = new Config(3000, 'mongodb://127.0.0.1:27017/projectDB', '*', 'dev', 'api/v1', 'Dhruvudnug2017')
var settings = config.configSettings()
console.log(settings)

module.exports = {
    config : config,
    settings : settings
}