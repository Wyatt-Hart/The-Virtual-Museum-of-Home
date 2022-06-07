
const express = require('express')
const userAuthTest = express.Router()
const { userAuthentication, userAuthorization ,userPasswordHashed } = require('./users-auth')

const db = require('../models')

// TEST PASSWORD HASH
userAuthTest.post('/password', async(req, res) => {

    const password = req.body.password

    const hashedPassword = userPasswordHashed(password)

    console.log(hashedPassword)

})

// TEST AUTHO

userAuthTest.post('/login', async(req, res) => {

    const userName = req.body.username
    const password = req.body.password

    if(userAuthentication(userName,password)){
        res.status(200).json({
            success: true,
            message: 'User authenticated',
            data: "current user Id"
        })
    } else {
        res.status(401).json({
            success: false,
            message: 'User not authorized',
            data: "nothing about the user"
        })
    }
})

userAuthTest.get('/login', async(req, res) => {
    
    res.status(200).json({
        message: 'send to login page'
    })
})
module.exports = userAuthTest