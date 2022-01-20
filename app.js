const express = require('express')
const path = require('path')
const cookiePaerser = require('cookie-parser')
const session = require('express-session')
const app = express()
const router = require('./routes/myRouter')

const port = 3000

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(cookiePaerser())
app.use(session({secret:"mysession",resave:false,saveUninitialized:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.listen(port,()=>{
    console.log(`Server run in port ${port}.`)
})