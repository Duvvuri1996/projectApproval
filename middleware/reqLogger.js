const Config = require('../config/config');

const reqRouteIpLogger = (req, res, next) => {
    if(req.method === 'OPTIONS'){
        var headers = {}
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Access-Control-Allow-Methods'] = 'POST, PUT, GET, DELETE, OPTIONS';
        headers['Access-Control-Allow-Credentials'] = false;
        headers['Access-Control-Max-Age'] = '86400';
        headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Http-Method-Override, Content-Type, Accept';
        res.writeHead(200, headers)
        res.end();
    } else{
        res.header('Access-Control-Allow-Origin', Config.settings.allowedCORSorigin);
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.header('Access-Control-ALlow-Headers', 'X-Requested-With, X-Http-Method-Override, Content-Type, Accept');
        next();
    }
}

module.exports = {
    reqRouteIpLogger : reqRouteIpLogger
}