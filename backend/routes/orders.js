const router = require('express').Router();
const Cart = require('../models/Cart');
const Order = require('../models/PlaceOrder.js');


//Creat order API
router.post ('/',async (req,res) => {
    const newOrder = new Order(req.body);

    try{
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder)
    }catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router ;