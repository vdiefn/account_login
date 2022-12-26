const User = require('../user')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb is connecting')
  User.create({
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
    }, 
    {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    })
  console.log('done')
})