const os = require('os')
const { name, sayHello } = require('./hello')

sayHello(name)

console.log(os.platform(), os.release())
