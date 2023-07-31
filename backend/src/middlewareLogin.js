const User = require('../db/models/usermodel')
const bcrypt = require('bcrypt')
const dayjs = require('dayjs')

async function middlewareLogin(request, response, next) {
  try {
    if (request.cookies.ban) {
      return response.status(401).json({msg: "Aguarde para uma nova requisição"})
    }
    
    const {user, password} = request.body
    const admin = await User.find({user})
    const permission = await bcrypt.compare(password, admin[0].password)
    response.cookie('ban', `wait`, {expires: new Date(dayjs().add(3, 'hours'))})

    if (permission) next()
    else {return response.status(401).json({msg: 'Não autorizado'})}
  } catch (err) {
    return response.status(401).json({msg: 'Não autorizado'})
  }
}

module.exports = middlewareLogin