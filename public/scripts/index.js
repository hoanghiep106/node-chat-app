var socket = io();

socket.on('connect', function() {
    console.log('Connected to the server');

    socket.emit('createMessage', {
        to: 'hanhpig95',
        text: 'Hey.'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
    console.log(message);
});