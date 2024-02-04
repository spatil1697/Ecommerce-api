const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const cors = require('cors');
app.use(cors())


const userRoute = require('./routes/user.js')
const productRoute = require('./routes/products.js')
const cartRoute = require('./routes/cart.js')
const orderRoute = require('./routes/orders.js')


    //connecting to mongoDB database
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_DB_URL)
            .then(() => console.log('Connected!'))
            .catch((err)=>{
                console.log(err);
            });
    
    //routes for all API
    app.use(express.json());
    app.use('/api/user',userRoute);
    app.use('/api/products',productRoute);
    app.use('/api/cart',cartRoute);
    app.use('/api/order',orderRoute);
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=> {
        console.log(`App listening on port ${PORT}`);
    });


