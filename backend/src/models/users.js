const {Schema,model} = require('mongoose');

const users = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: String, required: false},
    imageurl: {type: String, required: true},
    idpay: {type: String, required: false}
});

module.exports = model("users",users);