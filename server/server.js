const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('admin', 'New user joined'));

    socket.on('createMessage', (newMessage, callback) => {
        io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    });

    socket.on('disconnect', () => {
        console.log('User disconnected')
    });
});

server.listen(port, () => {
    console.log(`Started app on port ${port}`);
});

module.exports = {app};