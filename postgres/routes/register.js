const express = require('express')
const router = express.Router()
const db = require('../config/connection')
const bcrypt = require('bcryptjs')

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.genSalt(10, function (error, salt) {
        bcrypt.hash(password, salt, function (error, hash) {
            if (!error) {
                db.none('INSERT INTO users (username, password) VALUES ($1,$2)', [username, hash])
                    .then(() => {
                        res.redirect('/login')
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else {
                console.log(error)
            }
        })
    })
})

module.exports = router