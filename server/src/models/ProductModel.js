const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    amount: {
        Number,
        required: true,
    },
    id_category: {
        String,
        required: true,
    },
    id_brand: {
        String,
        required: true,
    },
    name: {
        String,
        required: true,
    },
    color: [String],
    price: {
        Number,
        required: true,
    },
    status:{
        String,
        required: true,
    },
    description: [String],
    image: String,
    active:{type:Boolean,
    default:true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;