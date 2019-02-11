const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      verifyToken = require('../auth/verifyToken'),
      userServices = require('../controller/user');
      reportServices = require('../controller/report');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', userServices.registerUser);
router.post('/login', userServices.loginUsers);
router.get('/logout', userServices.logoutUser);

router.post('/report', verifyToken, reportServices.createReport);
router.put('/report/:id', verifyToken, reportServices.updateReport);

module.exports = router;
