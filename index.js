const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('userMessage', (message) => {
        io.emit('message', message);
    })
})

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.sendFile('/public/index.html');
})

server.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})