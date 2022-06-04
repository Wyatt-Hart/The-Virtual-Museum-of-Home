const express = require('express')

const db = require('../models')
const exhibits = require('../models/exhibits')

// USER AUTHENTICATION
/*  this function compare the username, and hashed password against database
*   input: username, raw password
*   operation: hash and salt password and compare hashed password with password from database for a particular user
*   output: false if user does not exist or password mismatch, only return true if username exist, and password matched
*
*/
function userAuthentication (username, password, userId) {

    console.log('calling user authentication')

    console.log(`Username: ${username}`)

    console.log(`Password: ${password}`)

    console.log(`UserId: ${userId}`)

    // if user Id exist mean that user already authenticated

    if(userId != undefined && userId !== '') {
        // get user info and return true if user exist

        // query db for user using user id

        // if user exist retur true

        // else return false
        console.log('User Id Exist')

        return true
    }

    if (username == undefined || password == undefined || username === '' || password === '') {
        return false
    }
    
    // authenticate the user

    // hash and salt user password

    // get user information from db

    //

    return false
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

module.exports = {userAuthentication, userAuthorization}
