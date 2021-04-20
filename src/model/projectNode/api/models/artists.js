const mongoose= require ('mongoose');
const Schema=mongoose.Schema;

const Artists=mongoose.model('artist', new Schema({
    name:   String,
    description:  String ,
    trackCount:   Number
}))
module.exports= Artists