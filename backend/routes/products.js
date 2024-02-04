const router = require('express').Router();
const Products = require('../models/Products.js');


//getting list of all products.
router.get('/list',async (req,res) => {
    try{
        const list = await Products.find({});
        res.status(200).json(list)
    }catch (error){
        res.status(500).json(error)
    }

})

//fetch an item
router.get('/items/:id', async(req, res) => {
    try{
        const item = await Products.findOne({_id: req.params.id})
        if(!item) {
            res.status(404).send({error: "Item not found"})
        }
        res.status(200).send(item) 
    } catch (error) {
        res.status(400).send(error)
    }
})

// Adding new product API.
router.post ('/',async (req,res) => {
    const newProduct = new Products(req.body);

    try{
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    }catch (error) {
        res.status(500).json(error)
    }
});


module.exports = router ;

