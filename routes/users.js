const express = require("express");
let router = express.Router();
const userController = require('../controller/users')

//tell express to connected to create function
router.get('/users',userController.index)
router.get('/users/create',userController.createForm)
router.post('/users/create',userController.create)
router.get('/users/update/:id',userController.updatedForm)
router.put('/users/update/:id',userController.update)
router.delete('/users/delete/:id',userController.delete)

module.exports = router;