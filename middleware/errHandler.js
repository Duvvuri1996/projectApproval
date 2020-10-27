const reponse = require('../lib/reponse');
const Logger = require('../lib/log');

const errorHandler = (err, req, res, next) => {
    const logger = new Logger('Error occured at application level', 'error occured in errorHandler() function', 10)
    logger.err()
    let response = response.generate(true, 'Error occured at application level', 500, null)
    res.send(response)
}

const notFoundHandler = (req, res, next) => {
    const logger = new Logger('Route not found in the application', 'error occured in notFoundHandler() function', 10)
    logger.err()
    let response = resposne.generate(true, 'Route not found in the application', 404, null)
    res.send(resposne)
}

module.exports = {
    errorHandler : errorHandler,
    notFoundHandler : notFoundHandler
}