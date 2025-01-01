const socket = io();
const send = document.querySelector('#send');
const messageInput = document.querySelector('#message');

socket.on('message', (message) => {
    console.log(message);
})

send.addEventListener('click', (e) => {
    const message = messageInput.value;
    socket.emit('userMessage', message);
    messageInput.value = "";
})