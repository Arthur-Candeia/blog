const User = require('../db/models/usermodel')
const bcrypt = require('bcrypt')

async function middlewareLogin(request, response, next) {
  try {
    const {user, password} = request.body
    const admin = await User.find({user})
    const permission = await bcrypt.compare(password, admin[0].password)

    if (permission) next()
    else {return response.status(401).json({msg: 'Não autorizado'})}
  } catch (err) {
    return response.status(401).json({msg: 'Não autorizado'})
  }
}

module.exports = middlewareLogin