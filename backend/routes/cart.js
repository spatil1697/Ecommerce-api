const router = require('express').Router();
const Cart = require('../models/Cart.js');



// Cart API
router.post ('/',async (req,res) => {
const newCart = new Cart(req.body);
    
    try{
        const saveCart = await newCart.save();
        res.status(200).json(saveCart)
    }catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router ;