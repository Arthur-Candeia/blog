const Post = require('../db/models/model')

async function store(request, response) {
  try {
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
    }, 6000)
    
    response.status(200).json({likes: 'Ação Realizadas'})
  } catch (err) {
    response.status(401).json({msg: err?.message})
  }
}

module.exports = {store}