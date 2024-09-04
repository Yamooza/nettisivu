// Express.js palvelin //
const path = require('path')
const express = require('express')
const app = express()


const recommenders =require('./recommenders.json')

app.get('/api/recommenders' , (req, res) => {
    res.json(recommenders)
})
//-------------------------------------------------------
// Tehdään polkumääritys front kansioon 
const polku = path.join(__dirname, './front')

// Määritellään, että front kansiossa on tiedostosisältö
// jota palvelin käyttää kun se saa http requestin clientiltä
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on http://localhost:3000')
    console.log('Json recommender data is on http://localhost:3000/api/recommenders')
})