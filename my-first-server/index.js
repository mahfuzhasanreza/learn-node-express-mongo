const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Hello from Server');
})

app.get('/data', (req,res)=>{
    res.send('More data');
})

app.listen(port, ()=>{
    console.log(`My server is running on port: ${port}`);
})