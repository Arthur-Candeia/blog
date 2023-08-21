const express = require('express')
const router = express.Router()
const Post = require('../db/models/model')
const upload = require('../config/multer')
const middlewareLogin = require('./middlewareLogin')
const PostController = require('../controllers/PostController.js')
const LinkController = require('../controllers/LinkController')
const LikeController = require('../controllers/LikeController')

router.post('/', middlewareLogin, PostController.index)

router.post('/newpost', upload.single('file'), middlewareLogin, PostController.store)

router.post('/links', middlewareLogin, LinkController.store)

router.post('/likes/:action', middlewareLogin, LikeController.store)

module.exports = router