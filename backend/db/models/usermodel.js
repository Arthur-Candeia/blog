const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const userSchema = mongoose.Schema({
  user: {type: String, require: true},
  password: {type: String, require: true},
})

module.exports = mongoose.model('User', userSchema)