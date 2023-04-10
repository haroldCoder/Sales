const {Router} = require('express');
const {getUsers,createUsers,updateUsers,deleteUsers} = require('../controllers/users.controllers');
const route = Router();
route.route('/')
.get(getUsers)
.post(createUsers)
.put(updateUsers)
.delete(deleteUsers);

route.route('/:id')
.post(createUsers)
.put(updateUsers)
.delete(deleteUsers);

module.exports = route;