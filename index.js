const app = require('express')()
const cors = require('cors')
app.use(cors())
const http = require('http').createServer(app)
const port = 3000
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        method: "*",
    }
})

io.on('connection', socket => {
    console.log('A user connected')
    socket.on('message', message => {
        console.log('message', message)
        io.emit('servermessage', message)
    })
})

http.listen(port, () => {
    console.log(`I'm listening on port ${port}`)
})

