const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/new-text.txt')
const compressStream = zlib.createGzip()

//duplex method of stream with using read/write
readStream.on('data', chunk => {
  // reads data by chunks
  console.log(chunk.toString())
  // writes to a new file by chunks
  writeStream.write('\n---CHUNK START---\n')
  writeStream.write(chunk)
  writeStream.write('\n---CHUNK END---\n')
})

const handleError = () => {
  console.log('ERROR')
  readStream.destroy()
  writeStream.end('Finished with error...')
}

// duplex interface
readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError)
