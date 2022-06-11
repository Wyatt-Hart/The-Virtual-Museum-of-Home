const bcrypt = require('bcrypt')
const db = require('../models')



// USER AUTHENTICATION
/*  this function compare the username, and hashed password against database
*   input: username, raw password
*   operation: hash password and compare hashed password with password from database for a particular user
*   output: false if user does not exist or password mismatch, only return true if username exist, and password matched
*
*/

const bcryptSaltRounds = 12

async function createUser(userId, newUserData) {

    let user = await db.User.findById(userId)

    if(!user) {
        
        return false
    }

    if(user.profileCode != 10) {
        
        return false
    }

    try {

        const newUser = await db.User.create(newUserData)

        if(newUser.id) return newUser

    } catch {
        
        return false

    }   
}

async function userPasswordHashed (password) {
    // for hashing of user password during creation or reseting of user password

    const hashedPassword = await bcrypt.hash(password, bcryptSaltRounds)

    return hashedPassword
}

async function userAuthentication (loginUsername, password) {

    // return false if username or password not provided
    if (loginUsername == undefined || password == undefined || loginUsername === '' || password === '') {

        return false
    }
   
    // authenticate the user
    let user = await db.User.findOne({

       username: loginUsername 
    })
    
    // hash and salt user password
    if(!user || !await bcrypt.compare(password, user.password)){
        
        return false
    } else {
        
        return user
    }
}

// USER AUTHORIZATION
/*   output:
        1. true if user allowed to performed the action or have access
        2. false if user not found or not allowed certain action
*/
function userAuthorization (currentUser, itemToEdit) {

    console.log('calling user authorization')

    if(currentUser.profileCode === 10) {

        return true
    }

    if(currentUser.id === itemToEdit.id) {
        
        return true
    }

    return false
}



module.exports = {userAuthentication, userAuthorization, userPasswordHashed, createUser}
