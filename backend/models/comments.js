const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, required: true },
    thumbsUp: { type: Boolean, default: false },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('Comment', commentSchema)