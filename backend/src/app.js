require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
//configurar cors
require('../db/db.js')

app.use(express.json())
app.use('/', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))