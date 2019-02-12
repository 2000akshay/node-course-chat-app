var socket = io();
socket.on('connect', function () {
  console.log('Connected to server!')
  socket.emit('createMessage', {
    from: 'dasdas@dasd.com',
    text: 'Hello'
  })
})

socket.on('newMessage', function (newMessage) {
  console.log('New message received:', newMessage)
})
//connect and disconnect are built in events
socket.on('disconnect', function () {
  console.log('Disconnected from server!')
})
