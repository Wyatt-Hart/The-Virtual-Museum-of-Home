const express = require('express')

const db = require('../models')

// USER AUTHENTICATION
/*  this function compare the username, and hashed password against database
*   input: username, raw password
*   operation: hash and salt password and compare hashed password with password from database for a particular user
*   output: false if user does not exist or password mismatch, only return true if username exist, and password matched
*
*/
function userAuthentication (username, password, userId) {

    if (userId === '' && (username === '' || password === '')) {
        return false
    }

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

    const ACTION = ["CREATE", "EDIT", "DELETE", "VIEW"]
    
}