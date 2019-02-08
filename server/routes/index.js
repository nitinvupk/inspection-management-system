const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      verifyToken = require('../auth/verifyToken'),
      userServices = require('../controller/user');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', userServices.registerUser);

// router.get('/', verifyToken, userServices.getUsers);

// router.put('/:id', verifyToken, userServices.updateUser);

// router.delete('/:id', verifyToken, userServices.deleteUser);

router.post('/login', userServices.loginUsers);

// router.get('/filter/:data', userServices.filterUsers);

// router.get('/getuser/:id', verifyToken, userServices.getCurrentUser);

router.get('/logout', userServices.logoutUser);

module.exports = router;
