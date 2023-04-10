const mongoose = require('mongoose');

var SchemaTypes = mongoose.Schema.Types;

const product = new mongoose.Schema({
    "name": {type: String, required: false, unique: false},
    "description": {type: String, required: false, unique: false},
    "imgURI": {type: String,required: false, unique: false},
    "author": {type: String, required: false, unique: false},
    "price": {type: Object, required: false, unique: false},
    "category": {type: String, required: false, unique: false},
    "arrayImg": {type: [String], required: true, unique: false},
    "buys": {type: Number, required: true, unique: false}
})

module.exports = mongoose.model("products",product);