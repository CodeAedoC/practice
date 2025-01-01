require('dotenv').config();

const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

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

server.listen(process.env.PORT,  () => {
    console.log(`Server Started at port ${process.env.PORT}`);
})