const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const sass = require('node-sass')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

// Temp plate engine
app.engine('hbs', exphbs({ extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})