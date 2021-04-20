const express=require('express')
const tracks= require ('../models/tracks')

const router=express.Router()
router.get('/',(req,res)=>{
    tracks.find()
    .exec()
    .then(x=> res.status(200).send(x))
})

router.get('/:id', (req,res)=>{
    tracks.findById(req.params.id)
    .exec()
    .then(x=> res.status(200).send(x))
})
router.post('/',(req,res)=>{
    tracks.create(req.body).then(x=> res.status(201).send(x))
})

router.put('/:id',(req,res)=>{
    tracks.findOneAndUpdate(req.params.id, req.body)
    .then(()=>res.sendStatus(204))
})

router.delete('/:id', (req,res)=>{
    tracks.findOneAndDelete(req.params.id).exec().then(()=> res.sendStatus(204))
})

module.exports = router