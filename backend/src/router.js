const express = require('express')
const router = express.Router()
const Post = require('../db/models/model')
const upload = require('../config/multer')
const middlewareLogin = require('./middlewareLogin')
const fs = require('fs')

router.post('/', middlewareLogin, async (request, response) => {
  try {
    const posts = await Post.find()
    response.status(200).json(posts)
  }
  catch {
    response.status(500).json({msg: "Erro interno do servidor"})
  }
})

router.post('/newpost', upload.single('file'), middlewareLogin, async (request, response) => {
  try {
    const {title, content} = request.body
    const filePath = fs.readFileSync(request.file.path)
    const data = Buffer.from(filePath).toString('base64')
    const date = new Date().toLocaleString()
    const post = await new Post({title, content, src: data, date})
    
    await post.save()
    response.status(201).json('{}')
  } catch (err) {
    response.status(401).json({msg: err})
  }
})

module.exports = router