const path = require('path')

module.exports = createPath = page =>
  path.resolve(__dirname, '.', `${page}.ejs`)
