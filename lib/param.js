const emailVerification = (email) => {
    const emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.match(emailMatch)){
        return email
    } else {
        return false
    }
}

const passwordVerification = (password) => {
    const passwordMatch = /^[A-Za-z0-9]\w{7,}$/
    if(password.match(passwordMatch)){
        return password
    } else {
        return false
    }
}

module.exports = {
    email : emailVerification,
    password : passwordVerification
}