const express = require('express');
const myServer = require('./myServer.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from Server');
})

app.get('/data', (req, res) => {
    res.send('More data');
})

app.get('/server', (req, res) => {
    res.send(myServer);
})

app.get('/server/:id', (req, res) => {
    const id = req.params.id;
    console.log('I need data for id: ', id);
    const server = myServer.find(server => server.id === id) || {};
    res.send(server);
})

app.listen(port, () => {
    console.log(`My server is running on port: ${port}`);
})