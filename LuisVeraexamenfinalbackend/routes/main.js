const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main = require('../controllers/MainController')
const users = require('../controllers/UsersController')
const post = require('../controllers/PostsController')
const authMiddleware = require('../middleware/authenticate')

//Rutas
//MainController
router.get('/index',main.getIndex)
router.get('/post',main.getPost)

//UsersController
router.get('/testmysql',users.testMysql)
router.post('/createuser',users.createUser)
router.post('/getUserById',users.getUserById)
router.post('/login',users.setLogin)
router.get('/avatar',users.getAvatar)
//post controller
router.post('/userPost',authMiddleware.authenticate ,post.userPost)
router.post('/postComment',authMiddleware.authenticate, post.postComment)

module.exports = router;
