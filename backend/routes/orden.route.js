let mongoose = require('mongoose'),
    express = require('express'),
    router=express.Router()

let ordenSchema = require('../models/orden')

//CRUD

//CREATE
//localhost:5000/ordenes/create
router.route('/create').post((req, res, next)=>{
    ordenSchema.create(req.body,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//READ ordenes
//localhost:5000/ordenes?userId=1234
router.route('/').get((req, res,next)=>{
    ordenSchema.find({userId: req.query.userId}, (error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//localhost:5000/ordenes/1
router.route('/:id').get((req, res, next)=>{
    ordenSchema.findById(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//UPDATE ordenes
//localhost:5000/ordenes/edit/2
router.route('/edit/:id').put((req, res, next)=>{
    ordenSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },
    (error,data)=>{
        if (error) {
            return next(error)
        } else {
            console.log('orden updated successfully !')
            res.json(data)
        }
    })
})
// Delete ordenes
//localhost:5000/ordenes/delete/2
router.route('/delete/:id').delete((req, res, next) => {
    ordenSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports =router