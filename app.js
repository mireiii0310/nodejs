const express = require('express')
const app = express()
const routes = require('./routes')

app.use('/', routes)

app.listen(3000)

const path = require('path'); 

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 