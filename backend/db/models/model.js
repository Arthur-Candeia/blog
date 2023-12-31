const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const postSchema = mongoose.Schema({
  title: {type: String, require: true},
  content: {type: String, require: true},
  src: {type: String, require: true},
  date: {type: String, require: true},
  likes: {type: Number, require: false, default: 0}
})

module.exports = mongoose.model('Post', postSchema)