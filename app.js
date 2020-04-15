const express = require('express');
const app = express();
const users = require('./users');

app.use(express.json());

app.get('/users', (req,res)=>{
    res.status(200).json(users);
});

app.listen(4000);
console.log('listening on port 4000');