
const express = require('express')
const userAuthTest = express.Router()
const { userAuthentication, userAuthorization ,userPasswordHashed, createUser } = require('./users-auth')

const db = require('../models')

userAuthTest.post('/createUser', async(req, res) => {
    const userId = req.body.userId

    console.log(req.body)

    console.log("Creating New Users")

    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profileCode: 1
    }

    const currentUser = await createUser(userId, newUser)

    if(!currentUser) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized Action',
            data: ""
        })
    } else {
        res.status(401).json({
            success: false,
            message: 'Unauthorized Action',
            data: currentUser
        })
        
    }

})

// TEST PASSWORD HASH
userAuthTest.post('/password', async(req, res) => {

    console.log(req.body)

    const password = req.body.password

    console.log("Generating Password")

    console.log(password)

    const hashedPassword = await userPasswordHashed(password)

    console.log(hashedPassword)
    res.status(200).json({
        success: true,
        message: "Success"
    })

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