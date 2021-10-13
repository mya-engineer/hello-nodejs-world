const fs = require('fs')

fs.readFile('./lorem', 'utf8', (error, data) => {
  const lorem = data.toString()

  if (!fs.existsSync('./files')) {
    fs.mkdirSync('./files')
  }

  fs.writeFileSync('./files/is-lorem', lorem, () => {})
})

setTimeout(() => {
  fs.unlink('./files/is-lorem', () => {})
}, 4000)

setTimeout(() => {
  fs.rmdir('./files', () => {})
}, 6000)
