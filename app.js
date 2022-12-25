const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const User = require('./models/user')

const app = express()
const port = 3000
const db = mongoose.connection

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req,res) =>{
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body.email)
  console.log(req.body.password)
  const email = req.body.email
  const password = req.body.password
  return User.findOne({email:email})
    .lean()
    .then((user) => {
      if(user !== null){
        if(user.password === password)
        res.render('detail', {user})
      }else {
        return res.redirect('/')
      }
    })   
})



app.listen( port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})