const { Router } = require('express')
const createPath = require('../ejs-views/createPath')

const router = Router()

router.get('/', (req, res) => {
  const title = 'Home'
  res.render(createPath('index'), { title })
})

router.get('/contacts', (req, res) => {
  const title = 'Contacts'
  const contacts = [
    { name: 'ME', link: 'https://github.com/mya-engineer/hello-nodejs-world' },
    { name: 'ME', link: 'https://github.com/mya-engineer/hello-nodejs-world' },
    { name: 'ME', link: 'https://github.com/mya-engineer/hello-nodejs-world' },
  ]
  res.render(createPath('contacts'), { contacts, title })
})

router.get('/about', (req, res) => {
  res.redirect('/contacts')
})

router.use((req, res) => {
  const title = 'Error!'
  res.render(createPath('error'), { title })
})

module.exports = router
