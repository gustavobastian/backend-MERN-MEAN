const express = require('express')
const Router = express.Router();
const userController= require('../controller/userController')

//api users

Router.get('/', userController.sendUser)
Router.post('/', userController.createUser)
Router.put('/:id',userController.alterUser)
Router.delete('/:id',userController.deleteUser)
Router.get('/all', userController.sendAllUser)

module.exports = Router;