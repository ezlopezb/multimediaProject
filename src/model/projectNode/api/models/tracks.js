const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tracks = mongoose.model('track', new Schema({
    name: String,
    duration: Number,
    fuente: String,
    url: String,
    rating: Number,
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    genre: String,
    externalid: String
}))
module.exports = Tracks

