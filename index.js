const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'html','index.html'));
});

app.get('/dashboard', (req,res) => {});

app.get('/login', (req,res) => {});

app.get('/register', (req, res) => {});



//Start the server on port 3000
app.listen(3000, () => {
    console.log('http://localhost:3000');
});
