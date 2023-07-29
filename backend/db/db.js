require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect(`mongodb+srv://${process.env.CADASTRO}:${process.env.ENTRADA}@cluster0.gzjnjyy.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('Connect to MongoDB')).catch((err) => console.log(err))