const mongoose = require("mongoose")


    // Creating Schema for PlaceOrder.
    const PlaceOrderSchema = new mongoose.Schema(
        {
            userId : {type: String, required: true},
            products:[ 
                {
                    productId: {
                        type:String,
                    },
                    quantity:{
                        type:Number,
                        default: 1,
                    },

                },
            ],
            amount:  {type: Number, required: true},
            status: {type: String, default: "pending"},
        },
        {timestamps:true}//to include createdAt and updatedAt

    );
    module.exports = mongoose.model("PlaceOrder", PlaceOrderSchema);