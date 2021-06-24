const express = require('express')
const router = express.Router()
const db = require('../config/connection')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.one('SELECT * from users WHERE username=$1', [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result == true) {
                    if (req.session) {
                        req.session.userID = user.user_id
                        req.session.username = user.username

                        res.redirect('/profile')
                    }
                }
                else {
                    res.render('login', { message: 'Incorrect Username or Password' })
                }
            })
        })
        .catch((err) => {
            console.log(err)
            res.send('Incorrect username/password. Please try again.')
        })
})




module.exports = router