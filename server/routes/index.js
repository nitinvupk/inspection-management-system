const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      verifyToken = require('../auth/verifyToken'),
      userServices = require('../controller/user'),
      reportServices = require('../controller/report'),
      commentServices = require('../controller/comment');
      const path = require("path");
      const multer = require("multer");

      const storage = multer.diskStorage({
        destination: './files',
        filename(req, file, cb) {
          cb(null, `${new Date()}-${file.originalname}`);
        },
      });

      const upload = multer({ storage });

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', userServices.registerUser);
router.post('/login', userServices.loginUsers);
router.get('/logout', userServices.logoutUser);

router.post('/report', verifyToken, upload.single('myImage'), reportServices.createReport);
router.get('/reports', verifyToken, reportServices.getReports);
router.put('/report', verifyToken, reportServices.updateReport);
router.put('/reportUpdate', verifyToken, reportServices.updateSingleReport);
router.delete('/report', verifyToken, reportServices.deleteReport);

router.post('/report/comment', verifyToken, commentServices.createComment);
router.get('/report/comment', verifyToken, commentServices.getComments);

module.exports = router;
