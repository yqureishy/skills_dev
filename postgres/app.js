const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/interviewdb'
const db = pgp(connectionString)

app.listen(3000, ()=>{
    console.log('Server is running...')
})