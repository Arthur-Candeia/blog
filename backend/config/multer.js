const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  filename: function (request, file, callback) {
    callback(null, Math.floor(Math.random() * 10000000) + path.extname(file.originalname))
  }
})

const upload = multer({storage})

module.exports = upload