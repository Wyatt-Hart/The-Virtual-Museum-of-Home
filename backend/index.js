require('dotenv').config()
const express = require('express')
const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.json('Server is working')
})

app.use('/api/users', require('./controllers/users'))
app.use('/api/exhibits', require('./controllers/exhibits'))

app.listen(port, ()=>{
    console.log('[Express] The Server is live on ' + port)
})