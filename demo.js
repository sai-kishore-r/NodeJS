// const os= require('os');
// console.log(os.platform())
// console.log(os.release())
// console.log(os.arch())
// console.log(os.cpus())
// const EventEmitter = require('events')

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// myEmitter.on('ev', ()=> (console.log('fired')))
// myEmitter.emit('ev')

const http= require ('http')

const server = http.createServer((req,res) =>{
    res.end('hello Node...\n')
}) 
server.listen(4242,()=>{
    console.log('server is running..')
})