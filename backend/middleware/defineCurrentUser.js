
const db = require("../models")
const jwt = require('jsonwebtoken')


async function defineCurrentUser(req, res, next){

    try {

        const [ method, token ] = req.headers.authorization.split(' ')

        if(method == 'Bearer'){

            const result = await jwt.decode(token, process.env.JWT_SECRET)

            const id = result

            let user = await db.User.findById(id)
         
            req.currentUser = user
        }

        next()

    } catch(err){

        req.currentUser = null
        
        next() 
    }
}

module.exports = defineCurrentUser