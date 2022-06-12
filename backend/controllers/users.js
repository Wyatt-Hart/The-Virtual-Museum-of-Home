const router = require('express').Router()
const res = require('express/lib/response')
const { userAuthentication, userAuthorization ,userPasswordHashed, createUser , passwordChange} = require('./users-auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// const db = require('../models')

router.get('/', (req, res) => {
    res.json('Users Controller is working')
})

router.post('/createUser', async(req, res) => {

    const userId = req.currentUser.id

    let newUser = {
        name: req.body.firstName + " " + req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: await userPasswordHashed(req.body.password),
        profileCode: req.body.profileCode,
        allowPasswordChange: req.body.allowPasswordChange
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

router.post('/changePassword', async(req, res) => {
    
    const currentUser = req.currentUser

    if(!currentUser.allowPasswordReset) {

        res.status(401).json({
            success: false,
            message: 'Unauthorized Action',
            data: ""
        })
    }

    if(!await bcrypt.compare(req.body.currentPassword, currentUser.password)) {

        res.status(401).json({
            success: false,
            message: 'Invalid Current Password',
            data: ""
        })
        return
    }
   

    const result = await passwordChange(currentUser, req.body.newPassword)

    res.status(200).json(
        {
            success: true,
            message: 'Password changed successfully!',
            data: result
            
        }
    )

})

router.post('/login', async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    const currentUser = await userAuthentication(username, password)

    if(!currentUser) {

        res.status(401).json({
            success: false,
            message: 'User not authorized',
            data: ""
        })

    } else {

        const result = jwt.sign(currentUser.id, process.env.JWT_SECRET)

        res.status(200).json({
            success: true,
            message: 'User authenticated',
            data: {
                
                userId: currentUser.id,
                username: currentUser.username,
                name: currentUser.name,
                email: currentUser.email,
                allowPasswordReset: currentUser.allowPasswordReset == true ? currentUser.allowPasswordReset: false,
                exhibitTopics: currentUser.exhibitTopics,
                profileCode: currentUser.profileCode,
                token: result

            }
        })
    }
})

module.exports = router