const express = require('express')
const router = express.Router()
const Post = require('../db/models/model')
const Link = require('../db/models/linksModel')
const upload = require('../config/multer')
const middlewareLogin = require('./middlewareLogin')
const fs = require('fs')
require('dotenv').config()

router.post('/', middlewareLogin, async (request, response) => {
  try {
    const posts = await Post.find()
    const links = await Link.find()
    response.status(200).json({posts, links})
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

    const configDate = {year: 'numeric', month: 'long', day: 'numeric'}
    const date = new Date().toLocaleString('pt-br', configDate)
    const post = await new Post({title, content, src: data, date})
    
    await post.save()
    response.status(201).json('{}')
  } catch (err) {
    response.status(401).json({msg: err?.message})
  }
})

router.post('/links', middlewareLogin, async (request, response) => {
  try {
    const {title, url} = request.body
    const link = await new Link({title, url})
    await link.save()
    response.status(201).json('{}')
  } catch (err) {
    response.status(401).json({msg: err?.message})
  }
})


module.exports = router