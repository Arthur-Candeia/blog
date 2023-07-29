const express = require('express')
const router = express.Router()
const User = require('../db/models/usermodel')
const Post = require('../db/models/model')
const bcrypt = require('bcrypt')
const upload = require('../config/multer')
const middlewareLogin = require('./middlewareLogin')

router.get('/', middlewareLogin, async (request, response) => {
  const posts = await Post.find()
  response.status(200).json(posts)
})

router.post('/', upload.single('file'), middlewareLogin, async (request, response) => {
  try {
    const {title, content} = request.body
    const file = request.file
    const post = await new Post({title, content, src: file.path})
    await post.save()
    response.status(201).json('{}')
  } catch (err) {
    response.status(401).json({msg: err})
  }
})

module.exports = router