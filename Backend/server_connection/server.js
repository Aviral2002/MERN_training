const express = require('express');
const app = express();

const path = require('path')


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, 'register.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'login.html'));
})



app.listen('3000', (req, res) => {
    console.log('Server is running on port 3000')
})