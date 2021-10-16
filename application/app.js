const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

const PORT = 8888

const createPath = page => path.resolve(__dirname, 'ejs-views', `${page}.ejs`)

app.get('/', (req, res) => {
  const title = 'Home'
  res.render(createPath('index'), { title })
})

app.get('/contacts', (req, res) => {
  const title = 'Contacts'
  const contacts = [
    { name: 'ME', link: 'https://github.com/mya-engineer/hello-nodejs-world' },
    { name: 'ME', link: 'https://github.com/mya-engineer/hello-nodejs-world' },
    { name: 'ME', link: 'https://github.com/mya-engineer/hello-nodejs-world' },
  ]
  res.render(createPath('contacts'), { contacts, title })
})

app.get('/about', (req, res) => {
  res.redirect('/contacts')
})

app.get('/posts/:id', (req, res) => {
  const title = 'Post'
  res.render(createPath('post'), { title })
})

app.get('/posts', (req, res) => {
  const title = 'Posts'
  res.render(createPath('posts'), { title })
})

app.get('/add-post', (req, res) => {
  const title = 'Add Post'
  res.render(createPath('add-post'), { title })
})

app.use((req, res) => {
  const title = 'Error!'
  res.render(createPath('error'), { title })
})

app.listen(PORT, error => {
  error ? console.error(error) : console.log(`Listening on ${PORT}`)
})
