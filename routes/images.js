const express = require('express')
const Router = express.Router();
const imageController= require('../controller/imageController')

//api users

Router.get('/', imageController.sendImage)
Router.post('/', imageController.createImage)
Router.put('/',imageController.alterImage)
Router.delete('/',imageController.deleteImage)

module.exports = Router;