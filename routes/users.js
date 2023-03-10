const express = require('express')
const Router = express.Router();
const userController= require('../controller/userController')

//api users

Router.get('/test', userController.getUserTest)
Router.get('/:id', userController.getUser)
Router.post('/test/', userController.createUserTest)
Router.post('/', userController.createUser)
Router.put('/',userController.alterUser)
Router.delete('/:id',userController.deleteUser)

module.exports = Router;
