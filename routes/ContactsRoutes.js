const express = require('express')
const router = express.Router();

// get all contacts
router.route('/').get((req,res)=>{
    res.status(200).json({message:"Get all contacts"})
})

// get one contact
router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`Get contact ${req.params.id}`})
})

// create contact
router.route('/').post((req,res)=>{
    res.status(200).json({message:"Create Contact"})
})

// update contact
router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`Update contact ${req.params.id}`})
})

// delete contact
router.route('/:id').delete((req,res)=>{
    res.status(200).json({message:`Delete Contact ${req.params.id}`})
})

module.exports = router;