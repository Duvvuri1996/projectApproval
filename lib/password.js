const bcrypt = require('bcrypt');
const saltRounds = 10;
const Logger = require('./log');

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

const comparePassword = (oldPassword, comparePass, cb) => {
    bcrypt.compare(oldPassword, comparePass, (err, res) => {
        if(err){
            let logger = new Logger(err.message, 'Error while comparing passwords', 10)
            logger.err()
            cb(err, null)
        } else {
            cb(null, res)
        }
    })
}

const comparePasswordSync = (oldPassword, comparePass) => {
    return bcrypt.compareSync(oldPassword, comparePass)
}

module.exports = {
    hashPassword : hashPassword,
    comparePassword : comparePassword,
    comparePasswordSync : comparePasswordSync
}