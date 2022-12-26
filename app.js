const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const User = require('./models/user')
const app = express()
const port = 3000
const db = mongoose.connection
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(routes)

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


app.listen( port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})