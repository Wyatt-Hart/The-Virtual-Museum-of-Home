require('dotenv').config()
const express = require('express')
const port = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()


// MIDDLE WARE
app.use(cors());
app.use(express.json()); // to parse request body json

// Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    (e) => { console.log(e) }
  )

app.get('/', (req, res) => {
    res.json('Server is working')
})

app.use('/api/users', require('./controllers/users'))
app.use('/api/exhibits', require('./controllers/exhibits'))

app.listen(port, ()=>{
    console.log('[Express] The Server is live on ' + port)
})