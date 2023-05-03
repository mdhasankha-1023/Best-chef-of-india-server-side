const express = require('express')()
const app = express;
const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello world Api is coming soon...')
})

app.listen(port, () => {
    console.log('This server on:', port)
})