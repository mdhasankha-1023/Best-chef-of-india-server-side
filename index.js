const express = require('express')()
const cors = require('cors')
const app = express;
const port = 5000;

// use cors
app.use(cors())

const allChefs = require('./Data/BestchefsData.json')
const allRecipes = require('./Data/AllRecipes.json')

// get all-chefs Api data
app.get('/all-chefs', (req, res) => {
    res.send(allChefs)
})

// get api with id
app.get('/all-chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = allChefs.find(chef => parseInt(chef.id) === id)
    res.send(chef)
   

})

// get all-recipes Api data
app.get('/all-recipes', (req, res) => {
    res.send(allRecipes)
})



// app get
app.get('/', (req, res) => {
    res.send('Hello world Api is coming soon...')
})

// app listen
app.listen(port, () => {
    console.log('This server on:', port)
})