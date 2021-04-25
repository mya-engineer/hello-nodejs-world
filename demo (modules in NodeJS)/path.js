const path = require('path')

console.log('Filename: ', path.basename(__filename))

console.log('Dirname: ', path.dirname(__filename))

console.log('File extension:', path.extname(__filename))

console.log('Parse: ', path.parse(__filename))

console.log('Created path: ', path.join(__dirname, 'server', 'index.html'))
