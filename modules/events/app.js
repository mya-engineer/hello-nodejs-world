const Logger = require('./Logger')

const logger = new Logger()

logger.on('log-write', obj => {
  console.log(
    `[${new Date()}] Hello ${obj.name} from ${obj.country}: "${obj.msg}"`
  )
})

logger.log('Glad to meet you all!')
