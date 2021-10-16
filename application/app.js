const express = require('express')
const path = require('path')

const app = express()

const PORT = 8888

const createPath = page => path.resolve(__dirname, 'views', `${page}.html`)

app.get('/', (req, res) => {
  res.sendFile(createPath('index'))
})

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'))
})

app.get('/about', (req, res) => {
  res.redirect('/contacts')
})

app.use((req, res) => {
  res.sendFile(createPath('error'))
})

app.listen(PORT, error => {
  error ? console.error(error) : console.log(`Listening on ${PORT}`)
})
