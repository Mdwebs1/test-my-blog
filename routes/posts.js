
const express = require("express");
let router = express.Router();
//const postController = require('../controller/posts')
const postController = require('../controller/posts')


//tell express to connected to create function


router.get('/',postController.index)
router.get('/create',postController.createForm)
router.post('/create',postController.createForm)
router.get('/update/:id',postController.updateForm)
router.put('/update/:id',postController.updateForm)
router.delete('/delete/:id',postController.delete)
router.get('/all',postController.getWithUsers)


module.exports = router;