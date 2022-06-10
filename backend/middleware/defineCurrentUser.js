
const db = require("../models")
const jwt = require('jsonwebtoken')


async function defineCurrentUser(req, res, next){

    console.log('Define Current User - Middleware')

    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = await jwt.decode(token, process.env.JWT_SECRET)

            console.log('token: ' + token )
            console.log('result: ' + result )

            const { id } = result
            let user = await db.User.findOne({ 
                where: {
                    id: id
                }
            })
            console.log(result)
            req.currentUser = user
        }
        next()
    } catch(err){
        console.log(err)
        req.currentUser = null
        next() 
    }
}

module.exports = defineCurrentUser