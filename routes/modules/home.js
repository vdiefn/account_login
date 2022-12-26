const express = require('express')
const router = express.Router()
const User = require('../../models/user')


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  return User.findOne({ email })
    .lean()
    .then((user) => {
      if (user !== null) {
        if (user.password === password) {
          res.render('detail', { user })
        } else {
          const wrong = 'Email 或 Password 錯誤'
          return res.render('index', { wrong })
        }
      } else {
        const wrong = 'Username 或 Password 錯誤'
        return res.render('index', { wrong })
      }
    })
})

module.exports = router