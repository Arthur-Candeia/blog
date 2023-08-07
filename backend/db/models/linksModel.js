const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const linksModelSchema = mongoose.Schema({
  links: {
    type: Object,
    require: true
  }
})

module.exports = mongoose.model('Link', linksModelSchema)