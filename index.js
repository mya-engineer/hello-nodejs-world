// (function(exports, require, module, __dirname, __filename) {
// const chalk = require('chalk')
// const text = require('./data.js')

// console.log(chalk.blue(text))

// console.log(__filename)
// })

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
  let filePath = path.join(
    __dirname,
    'public',
    request.url === '/' ? 'index.html' : request.url
  )

  const extension = path.extname(filePath)
  let contentType = 'text/html'

  switch (extension) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!extension) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          response.writeHead(500, 'Server Backend Error')
          response.end('Error')
        } else {
          response.writeHead(200, 'OK', { 'Content-Type': 'text/html' })
          response.end(data)
        }
      })
    } else {
      response.writeHead(200, 'OK', { 'Content-Type': contentType })
      response.end(content)
    }
  })
})

const PORT = process.env.PORT || 8888

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})
