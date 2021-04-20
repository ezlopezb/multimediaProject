const express=require('express');
const mongoose=require('mongoose');
const cors= require('cors');

const tracks=require('./routes/tracks')
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/api/models/tracks', tracks)
module.exports = app;
