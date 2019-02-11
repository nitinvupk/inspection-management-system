const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      verifyToken = require('../auth/verifyToken'),
      userServices = require('../controller/user');
      reportServices = require('../controller/report');
      commentServices = require('../controller/comment');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', userServices.registerUser);
router.post('/login', userServices.loginUsers);
router.get('/logout', userServices.logoutUser);

router.post('/report', verifyToken, reportServices.createReport);
router.get('/reports', verifyToken, reportServices.getReports);
router.post('/report/comment', verifyToken, commentServices.createComment);
router.get('/report/comment', verifyToken, getComments);
router.put('/report/:id', verifyToken, reportServices.updateReport);
router.delete('report/:id', verifyToken, reportServices.deleteReport);

module.exports = router;
