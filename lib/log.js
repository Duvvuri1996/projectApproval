const logger = require('pino')();
const time = require('./moment');

class Logger {
    constructor(message, origin, level){
        this.timeStamp = time.now();
        this.message = message;
        this.origin = origin;
        this.level = level
    }

    err ()  {
        this.obj = {
            timeStamp : this.timeStamp,
            message : this.message,
            origin : this.origin,
            level : this.level
        }
        logger.error(this.obj)
        return this.obj
    }

    info () {
        this.obj = {
            timeStamp : this.timeStamp,
            message : this.message,
            origin : this.origin,
            level : this.level
        }
        logger.info(this.obj)
        return this.obj
    }
}

module.exports = Logger