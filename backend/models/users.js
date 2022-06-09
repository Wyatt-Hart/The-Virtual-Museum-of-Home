const mongoose = require('mongoose')
const { Schema } = mongoose

let userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profileCode: { type: Number, required: true, default: 0 },
    allowPasswordReset: { type: Boolean, required: true, default: false },
    username: { type: String, required: true},
    
    exhibitTopics: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Exhibit' }],
})
  
module.exports = mongoose.model('User', userSchema)