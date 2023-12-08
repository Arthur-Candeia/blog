const Link = require('../../db/models/linksModel')

async function store(request, response) {
  try {
    const {title, url} = request.body
    const link = await new Link({title, url})
    await link.save()
    response.status(201).json('{}')
  } catch (err) {
    response.status(401).json({msg: err?.message})
  }
}

module.exports = {store}