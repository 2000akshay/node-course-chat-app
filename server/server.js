const path = require('path')
const http = require('http')
const socketIO = require('socket.io')
const express = require('express')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('New user connected!')
  socket.emit('newMessage', {
    from: 'fsdf',
    text: 'fsfdfds',
    createdAt: new Date()
  })

  socket.on('createMessage', newMessage => {
    console.log('Received message:', newMessage)
  })
  socket.on('disconnect', () => {
    console.log('Disconnected from client!')
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
