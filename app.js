const express = require('express')
const mongoose = require('mongoose');
const port = 3000

// const app = express()

mongoose.connect('mongodb://localhost:27017/test')
const db = mongoose.connection
db.on('error', () => {
    console.log('conetion eror')
})

db.once('open', () => {
    console.log('successfully conection')
})


// app.get('/getusers', (req, res) => {
     
// })

// app.listen(port, () => {
//     console.log('listen on port 3000')
// })