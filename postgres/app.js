const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const bodyParser = require('body-parser')
const pgp = require('pg-promise')()

app.engine('mustache', mustacheExpress())
app.set('views','./views')
app.set('view engine', 'mustache')

app.use(express.urlencoded({extended:false}))

const connectionString = 'postgres://localhost:5432/interviewdb'
const db = pgp(connectionString)

app.get('/', (req,res)=>{
    res.render('create_posts')
})

app.post('/', (req,res)=>{
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

app.get('/view_posts',(req,res)=>{
    db.any('SELECT * FROM blogs')
    .then((posts)=>{
        res.render('view_posts', {posts: posts})
    })
})














app.listen(3000, ()=>{
    console.log('Server is running...')
})