const express = require('express')
const bcrypt = require('bcrypt')
const db = require('../models')



// USER AUTHENTICATION
/*  this function compare the username, and hashed password against database
*   input: username, raw password
*   operation: hash and salt password and compare hashed password with password from database for a particular user
*   output: false if user does not exist or password mismatch, only return true if username exist, and password matched
*
*/

const bcryptSaltRounds = 12

async function createUser(userId, newUserData) {
    
    let user = await db.User.findById({

        where: { id: userId }
    })

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

async function userAuthentication (username, password, userId) {

    console.log('calling user authentication')

    // if user Id exist mean that user already authenticated

    if(userId != undefined && userId !== '') {

        // get user info and return true if user exist
        let user = await db.User.findById({

            where: { id: userId }
        })

        // if user does not exist then return false
        if(!user) {

            return false;
        }

        // user exist
        return true
    }

    // return false if username or password not provided
    if (username == undefined || password == undefined || username === '' || password === '') {

        return false
    }
    
    // authenticate the user
    let user = await db.User.findOne({

        where: { username: username }
    })
    
    // hash and salt user password
    if(!user || !await bcrypt.compare(password, user.password)){
        return false
    } else {
        
        return user
    }
}

// USER AUTHORIZATION
/*  this function use the userId to lookup user access level and decide if user can perfome certain action
*   input: userId, documentId, action(view, delete, create, edit)
*   operation: lookup user autho by id, lookup document
*   output:
        1. true if user allowed to performed the action or have access
        2. false if user not found or not allowed certain action
*/
function userAuthorization (userId, documentId, action) {

    console.log('calling user authorization')

    const ACTION = ["CREATE", "EDIT", "DELETE", "VIEW"]


    
}



module.exports = {userAuthentication, userAuthorization, userPasswordHashed, createUser}
