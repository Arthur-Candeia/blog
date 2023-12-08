require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('../db/db.js')

const allowedOrigins = ['https://blog-arthur-candeia.vercel.app', 'https://blog-admin-arthur-candeia.vercel.app']
const limiter = rateLimit({windowMs: 30 * 60 * 1000, max: 50, message: 'Too many requests!'})

app.use(limiter)
app.use(express.json())

app.use(cors({
  origin: function(origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    }
    else {
      callback(new Error(origin + ' não é habilitado pelo CORS'))
    }
  },
  credentials: true,
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))