const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 8888

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  let basePath = ''

  res.setHeader('Content-Type', 'text/html')

  const createPath = page => path.resolve(__dirname, 'views', `${page}.html`)

  res.statusCode = 200

  switch (req.url) {
    case '/':
      basePath = createPath('index')
      break
    case '/about':
      res.statusCode = 301
      res.setHeader('Location', '/contacts')
      res.end()
      break
    case '/contacts':
      basePath = createPath('contacts')
      break
    default:
      basePath = createPath('error')
      res.statusCode = 404
      break
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.error(err)
      res.statusCode = 500
    } else {
      res.write(data)
    }
    res.end()
  })
})

server.listen(PORT, error => {
  error ? console.error(error) : console.log(`Listening on port ${PORT}...`)
})
