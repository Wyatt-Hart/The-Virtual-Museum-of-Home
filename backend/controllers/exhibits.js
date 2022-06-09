const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')

router.post('/', (req, res) => {
    res.json(req.body)
    db.Exhibit.create(req.body)
        .catch( err => {
            if(err && err.name == 'ValidationError'){
                let message = ''
                for(var field in err.errors){
                    message += `${err.errors[field].message}`
                }
                console.log('--Validation Error Message--', message)
            }
        })
})

router.get('/', (req, res) => {
    res.json('Exhibits Controller is working')
})


module.exports = router