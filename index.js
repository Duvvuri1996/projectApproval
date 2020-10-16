const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const http = require('http');

const app = express();

const config = require('./config/config');
const Logger = require('./lib/log'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());


const server = http.createServer(app)
server.listen(config.settings.port)
server.on('error', onError)
server.on('listening', onListening)

function onError(error){
    if(error.syscall !== 'listen'){
        console.log(error.code + ' is not an equal listener')
        throw error;
    }
    switch(error.code){
        case 'EACCES':
            console.log(error.code + ' permission denied')
            var logger = new Logger(error.code+' permission denied', 'error occured on onError() EACCESS', 10)
            logger.err()
            /**
             * The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code
             * 0 for Succes and 1 for failure
             */
            process.exit(1)
            break;
            //EADDRINUSE - the port number which listen() tries to bind the server to is already in use.
        case 'EADDRINUSE':
            console.log(error.code + ' port already in use')
            var logger = new Logger(error.code+' port already in use', 'error occured on onError() EADDRINUSE', 7)
            logger.err()
            process.exit(1)
            break;
        default:
            console.log(error.code + ' :unknown error occured')
            var logger = new Logger(error.code+' :unknown error occured', 'error occured on onError() unknown error occured', 5)
            logger.err()
            throw error;
    }
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Listening on ' + bind)
    mongoose.connect(config.settings.db, 
        {useNewUrlParser: true},
        {useUnifiedTopology: true},
        {useCreateIndex: true}
    )
}

mongoose.connection.on('error',function(err) {
    var logger = new Logger(err, 'error occured on error() while connecting to the connection', 10)
    logger.err()
})

mongoose.connection.on('open', function(err){
    if(err){
        var logger = new Logger(err, 'error occured on error()', 7)
        logger.err()
    } else {
        var logger = new Logger('successfully connected to the mongoose', 'Successful while connecting to db', 10)
        logger.info()
    }
})

module.exports = app;