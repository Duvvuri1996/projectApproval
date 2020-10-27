const auth = require('../models/auth');
const Logger = require('../lib/log');
const response = require('../lib/reponse');
const token = require('../lib/token');
const Check = require('../lib/check');

class Authentication {

    constructor(authToken){
        this.authToken = authToken 
    }
    
    isAuthorized = (req, res, next) => {
        if(req.params.authToken || req.body.authToken || req.header('authToken') || req.query.authToken) {
            auth.findOne({authToken : req.params.authToken || req.body.authToken || req.header('authToken') || req.query.authToken}), (err, details) => {
                if(err) {
                    var logger = new Logger(err, "err in isAuthorized() function", 10)
                    logger.err()
                    var response = response.generate(true, "Some unkown error occured", 500, null)
                    res.send(response)
                } 
                else if(new Check(details).isEmpty()){
                    var logger = new Logger("Error", "err in isAuthorized() while checking the details of the authToken", 7)
                    logger.err()
                    var resposne = response.generate(true, "The details are empty", 404, null)
                    res.send(response)
                } else {
                    var logger = new Logger("Details found", "search for details successful in isAuthorized() function", 10)
                    logger.info()
                    req.user = {userId : details.data.userId}
                    next()
                }
            }
        } else{
            var logger = new Logger("Missing parameters", "authToken error in isAuthorized() function", 10)
            logger.err()
            var response = response.generate(true, "authToken parameter is missing in request", 400, null)
            res.send(response)
        }
    }
    
}

module.exports = {
    Authentication : Authentication
}