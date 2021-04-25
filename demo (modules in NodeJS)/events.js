const EventEmitter = require('events')
const { emit } = require('process')

const emitter = new EventEmitter()

// emitter.on('any', data => {
//   console.log('ON: any', data)
// })

// emitter.emit('any', { a: 1 })
// emitter.emit('any', { b: 2 })

// setTimeout(() => {
//   emitter.emit('any', { c: 3 })
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, callback) {
    console.log('[Subscribe...]')
    this.on(eventName, callback)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', { aa: 22 })
