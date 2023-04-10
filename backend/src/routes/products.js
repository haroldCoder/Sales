const {Router} = require('express');
const {getproducts,createproducts,updateproducts,deleteproducts} = require('../controllers/products.controllers');
const route = Router();
route.route('/')
.get(getproducts)
.post(createproducts)
.put(updateproducts)
.delete(deleteproducts);

route.route('/:id')
.post(createproducts)
.put(updateproducts)
.delete(deleteproducts);

module.exports = route;