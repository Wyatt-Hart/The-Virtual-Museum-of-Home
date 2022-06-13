const mongoose = require('mongoose')

const exhibitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tags: { type: String, required: true },
  regions: { type: String, required: true, default: 'What region(s) does this exhibit represent?' },
  timePeriod: { type: String, required: true, default: 'What time period does this exhibit represent?' },
  images: { type: Object, required: true, default: 'http://placekitten.com/350/350'},
  videos: { type: String, default: 'https://www.youtube.com/watch?v=oznr-1-poSU'},
  description: { type: String, required: true,  default: 'https://www.lipsum.com/feed/html' },
  sources: { type: String, required: true,  default: 'Where did this information come from?' },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  authorId: { type: String, required: true
    /* type: mongoose.Schema.Types.ObjectId,
    ref: 'User' */
  }
})

exhibitSchema.methods.showEstablished = function() {
  return `${this.name}`
}

module.exports = mongoose.model('Exhibit', exhibitSchema)