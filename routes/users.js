const express = require('express')
const Router = express.Router();
const userController= require('../controller/userController')

//api users

Router.get('/', userController.sendUser)
Router.post('/', userController.createUser)
Router.put('/',userController.alterUser)
Router.delete('/',userController.deleteUser)

module.exports = Router;
