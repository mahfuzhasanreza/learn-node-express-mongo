const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'mahfuz', email: 'mahfuz@gmail.com' },
    { id: 2, name: 'hasan', email: 'hasan@gmail.com' },
    { id: 3, name: 'reza', email: 'reza@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('User management server is running');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})