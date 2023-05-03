const express = require('express')()
const cors = require('cors')
const app = express;
const port = 5000;

// use cors
app.use(cors())

const allChefs = require('./Data/BestchefsData.json')

// get Api data
app.get('/all-chefs', (req, res) => {
    res.send(allChefs)
})


// app get
app.get('/', (req, res) => {
    res.send('Hello world Api is coming soon...')
})

// app listen
app.listen(port, () => {
    console.log('This server on:', port)
})