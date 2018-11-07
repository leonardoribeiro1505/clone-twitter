const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3001;

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect("mongodb://localhost/twitter",
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})