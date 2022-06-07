const router = require('express').Router()
const res = require('express/lib/response')
const { userAuthentication, userAuthorization ,userPasswordHashed, createUser } = require('./users-auth')

// const db = require('../models')

router.get('/', (req, res) => {
    res.json('Users Controller is working')
})

router.post('/createUser', async(req, res) => {

    console.log("Create User:")

    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profileCode: 1
    }

    const createdUser = await createUser(userId, newUser)

    if(!createdUser) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized Action',
            data: ""
        })
    } else {
        res.status(200).json({
            success: true,
            message: 'User successfully created',
            data: createdUser
        })
        
    }

})

router.post('/passwordReset', async(req, res) => {
    
    const currentUser = req.currentUser

    if(!currentUser.allowPasswordReset) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized Action',
            data: ""
        })
    }

    

})

router.post('/login', async (req, res) => {

    const userName = req.body.username
    const password = req.body.password

    const currentUser = await userAuthentication(userName, password)

    if(IcurrentUser) {
        res.status(401).json({
            success: false,
            message: 'User not authorized',
            data: ""
        })
    } else {
        res.status(200).json({
            success: true,
            message: 'User authenticated',
            data: currentUser
        })
    }
})

module.exports = router