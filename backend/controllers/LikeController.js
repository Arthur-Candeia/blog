const Post = require('../db/models/model')

async function store(request, response) {
  try {
    const timeDelay = Math.floor(Math.random() * 60000)
    setTimeout(async () => {
      const {id} = request.body
      const {action} = request.params
      const post = await Post.findById(id, 'likes')

      switch (action) {
        case 'increment':
          post.likes++
        break
        case 'decrement':
          post.likes--
      }
      await post.save()
    }, timeDelay)
    
    response.status(200).json({likes: 'Ação Realizadas'})
  } catch (err) {
    response.status(401).json({msg: err?.message})
  }
}

module.exports = {store}