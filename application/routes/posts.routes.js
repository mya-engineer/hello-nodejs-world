const { Router } = require('express')
const createPath = require('../ejs-views/createPath')

const router = Router()

let posts = [
  {
    id: '1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    title: 'Lorem? Lorem!',
    date: '05.07.2021',
    author: 'Myasha',
  },
]

router.get('/add-post', (req, res) => {
  const title = 'Add Post'
  res.render(createPath('add-post'), { title })
})

router.post('/add-post', (req, res) => {
  const { title, author, text } = req.body
  const post = {
    id: new Date().toString(),
    date: new Date().toLocaleDateString(),
    title,
    author,
    text,
  }
  posts = [...posts, post]
  res.redirect('/posts')
})

router.get('/:id', (req, res) => {
  console.log(posts)
  const title = 'Post'
  res.render(createPath('post'), {
    title,
    post: posts.find(item => item.id === req.params.id),
  })
})

router.get('/', (req, res) => {
  const title = 'Posts'
  res.render(createPath('posts'), { title, posts })
})

module.exports = router
