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
                email: currentUser.email,
                user: currentUser.allowPasswordReset,
                exhibitTopics: currentUser.exhibitTopics,
                token: result.value

            }
        })
    }
})

module.exports = router