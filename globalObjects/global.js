// global object itself!
console.log(global)

// global function
setTimeout(() => {
  console.log('Hello, from global function!')
}, 1000)

// special global variables
console.log(__dirname)
console.log(__filename)

// configurations, ENV
console.log(process, process.env, process.argv)
console.log(`Hello, comrade-${process.argv[2]}!`)

// URLs
const url = new URL('https://github.com/mya-engineer')
console.log(url)
