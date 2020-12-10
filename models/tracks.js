const mongoose = require('mongoose');
const { Schema } = mongoose

const tracksSchema = new Schema({
    name: String,
    artist: String,
    key: Number,
    mode: Number,
    tempo: Number
})

module.exports = mongoose.model('Tracks', tracksSchema)