const jwt = require('jsonwebtoken'),
      config = require('../config');

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  
  if(!token) return res.send({auth: false, message: "no token provided"});

  jwt.verify(token, config.secret, function(err, decoded) {
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
}

module.exports = verifyToken;
