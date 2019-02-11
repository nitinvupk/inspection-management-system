const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const config = require('../config');

exports.registerUser = async (req, res) => {
  try {
    if(!req.body.name){
      res.send({auth:false , message: "Name is required."});
      return
    }

    if(!req.body.email){
      res.send({auth:false , message: "Email is required."});
      return
    }

    if(!req.body.password){
      res.send({auth:false , message: "Password is required."});
      return
    }

    const hashedPass = bcrypt.hashSync(req.body.password,8);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: hashedPass,
    });

    const token = jwt.sign({id: user._id, role: user.role}, config.secret, {expiresIn: 86400});
    
    user.loginToken = token;
    await user.save();
    res.send({auth: true, token: token, currentUser:user});
  
  } catch (err) {
    console.log(err);
  }
}

exports.loginUsers = async (req, res) => {
  try{
    
    if((req.body.email) && (req.body.password)){
      const user = await User.findOne({ email: req.body.email });
      
      if(!user){ 
        res.send({auth: false, message: "no user was found."});
        return
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password,user.password);
      
      if(!passwordIsValid){ 
        res.send({auth: false, message: "Username or password incorrect"});
        return
      }
      const token = jwt.sign({ id: user._id, role: user.role }, config.secret, {expiresIn: 86400});
      res.send({auth: true, token: token , currentUser:user});
    }
    else{
      res.send({auth: false, message: "please provide the credentials."});
    }
  }
  catch(err){
    console.log(err);
  }
}

exports.logoutUser = (req, res) => {
  res.send({ auth: false, token: null });
}
