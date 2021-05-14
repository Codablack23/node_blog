const https = require('http')
const express = require('express')
const blogRoute = require('./routes/blogs')
const sequelize = require('./models/database')

const app = express()

app.set('view engine', 'ejs')
app.listen(5000)
sequelize.sync().then(() => {
    console.log('db has been created')
})
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.render('home', { title: 'Home' })
})

app.use('/blogs', blogRoute)