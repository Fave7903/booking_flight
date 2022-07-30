const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    title: String,
    time: String,
    price: Number,
    date: String
})

module.exports = mongoose.model('flight', flightSchema)