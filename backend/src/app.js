require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('../db/db.js')

app.use(express.json())

app.use((request, response, next) => {
  const allowedOrigins = ['https://blog-arthur-candeia.vercel.app/', 'https://blog-admin-arthur-candeia.vercel.app/']
  const origin = request.headers.origin
  if (allowedOrigins.includes(origin)) {
    response.header("Access-Control-Allow-Origin", `${origin}`);
    response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
  }
});

app.use(cookieParser())

app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))