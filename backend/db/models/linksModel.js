const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const linksModelSchema = mongoose.Schema({
  title: {type: String, require: true},
  url: {type: String, require: true}
})

module.exports = mongoose.model('Link', linksModelSchema)