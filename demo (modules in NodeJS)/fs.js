const fs = require('fs') // filesystemd
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), err => {
//   if (err) {
//     throw err
//   }

//   console.log('Directory is created')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello, NodeJS-Modules-World!', err => {
//   if (err) {
//     throw err
//   }

//   console.log('File is create')

//   fs.appendFile(filePath, '\nHello, Second-Line-World!', err => {
//     if (err) {
//       throw err
//     }

//     console.log('File is appended')
//   })
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  // const data = Buffer.from(content)

  // console.log('Content:\n', data.toString())

  console.log(content)
})
