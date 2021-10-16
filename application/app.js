const express = require('express')
const path = require('path')
var morgan = require('morgan')

const PORT = 8888

const NODE_ENV = process.env.NODE_ENV || 'development'

const app = express()

app.set('view engine', 'ejs')

if (NODE_ENV === 'development') {
  app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms')
  )
}

app.use(express.urlencoded({ extended: false }))

app.use(express.static('styles'))

app.use('/posts', require('./routes/posts.routes'))
app.use('/', require('./routes/general.routes'))

app.listen(PORT, error => {
  error ? console.error(error) : console.log(`Listening on ${PORT}`)
})
