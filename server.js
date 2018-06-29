const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})

server.listen(8080, () => {
    console.log('Servidor em http:localhost:8080')
    console.log('ctrl + c para desligar')
})