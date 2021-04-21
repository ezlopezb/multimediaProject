const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = mongoose.model('user', new Schema({
    name: String,
    email: String,
    dateOfBirth: String,
    password: String,
    country: String,
    sex: String
}))
module.exports = Users