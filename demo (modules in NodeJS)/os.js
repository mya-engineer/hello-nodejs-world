const os = require('os')

console.log('OS:', os.platform())

console.log('Architecture:', os.arch())

console.log('Processors:', os.cpus())

console.log('Free space:', os.freemem())

console.log('Totale mem:', os.totalmem())

console.log('Home dir:', os.homedir())

console.log('Sys uptime:', os.uptime())
