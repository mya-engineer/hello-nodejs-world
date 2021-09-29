const EventEmitter = require('events')

class Logger extends EventEmitter {
  log = msg => {
    this.emit('log-write', { name: 'Misha', country: 'Russia', msg })
  }
}

module.exports = Logger
