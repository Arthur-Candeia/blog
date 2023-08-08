require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('../db/db.js')

app.use(express.json())

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", 'https://blog-arthur-candeia.vercel.app');
  response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next();
});

app.use(cookieParser())

app.use(cors({
  origin: 'https://blog-arthur-candeia.vercel.app',
  credentials: true,
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))