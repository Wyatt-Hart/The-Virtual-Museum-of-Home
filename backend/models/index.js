require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Exhibit = require('./exhibits')
module.exports.User = require('./users')
module.exports.Comment = require('./comments')