const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const publicPath = path.join(__dirname, './public')

app.set('view engine', 'hbs')
app.set('views', publicPath)
hbs.registerPartials(path.join(publicPath, './partials'))
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/product', (req, res) => {
    res.render('product')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000)