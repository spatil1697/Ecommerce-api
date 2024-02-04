const mongoose = require("mongoose")


    // Creating Schema for Products.
    const ProductsSchema = new mongoose.Schema(
        {
    
            title : {type: String, required: true, unique: true},
            img: {type: String, required: true},
            categories: {type: Array},
            price:{ type: Number, required: true}

        },
        {timestamps: true}//to include createdAt and updatedAt

    );
    module.exports = mongoose.model("Products", ProductsSchema);