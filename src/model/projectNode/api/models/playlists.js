const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Playlists = mongoose.model('playlist', new Schema({
    name: String,
    description: String,
    trackCount: Number
}))
module.exports = Playlists