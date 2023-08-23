const mongoose = require('mongoose');

    const FavoriteSchema = new mongoose.Schema({
    id_user:{
        type:String
    },
    id_product:{
        type:String
    }
})

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports= Favorite