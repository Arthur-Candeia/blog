require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
require('../db/db.js')

app.use(express.json())

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", '*');
  response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next();
});

app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))