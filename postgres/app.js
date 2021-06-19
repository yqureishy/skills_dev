const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const app = express()
const { v4: uuidv4 } = require('uuid')
const bodyParser = require('body-parser')
const pgp = require('pg-promise')()
const bcrypt = require('bcryptjs')

app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'MYSECRETKEY',
    resave: false,
    saveUninitialized: true
}))

app.engine('mustache', mustacheExpress())
app.set('views','./views')
app.set('view engine', 'mustache')

const connectionString = 'postgres://localhost:5432/interviewdb'
const db = pgp(connectionString)

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/create_posts', (req,res)=>{
    res.render('create_posts')
})

app.post('/create_posts', (req,res)=>{
    const title = req.body.title
    const isPublished = req.body.isPublished == "on" ? true : false
    const body = req.body.body

    db.none('INSERT INTO blogs (title, is_published, body) VALUES ($1,$2,$3)', [title, isPublished, body])
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/login', (req,res)=>{
    res.render('login')
})

app.get('/register', (req,res)=>{
    res.render('register')
})

app.post('/register', (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(password, salt, function(error, hash){
            if(!error){
                db.none('INSERT INTO users (username, password) VALUES ($1,$2)', [username, password])
                    .then(() => {
                        res.redirect('/login')
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else{
                console.log(error)
            }
        })
    })

    
})

app.get('/view_posts',(req,res)=>{
    db.any('SELECT * FROM blogs')
    .then((posts)=>{
        res.render('view_posts', {posts: posts})
    })
})

app.post('/delete-post', (req,res)=>{

    const postID = req.body.post_id

    db.none('DELETE FROM blogs where (post_id) = ($1)', [postID])
    .then(()=>{
        res.redirect('/view_posts')
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/update-post', (req,res)=>{

    const postID = req.body.postID

    res.render('update_posts',{postID: postID})

})

app.post('/update-this-post', (req,res)=>{
    const Title = req.body.title
    const isPublished = req.body.isPublished == 'on' ? true : false
    const Body = req.body.body
    const postID = req.body.postID

    db.none('UPDATE blogs SET title=$1, is_published=$2, body=$3 where post_id=$4', [Title,isPublished,Body,postID])
    .then(() =>{
        res.redirect('/view_posts')
    })
    .catch((err)=>{
        console.log(err)
    })
})














app.listen(3000, ()=>{
    console.log('Server is running...')
})