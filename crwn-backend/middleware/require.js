const User = require('../models/user');
const jwt = require("jsonwebtoken");

exports.requireAuth = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        console.log(decodedToken.user._id)
        if (err) {
          res.status(401).json({ error: 'Invalid token' });
        } else {
          User.findOne({_id:decodedToken.user._id})
            .then(user => {
              req.user = user;
              next();
            })
            .catch(err => {
              res.status(401).json({ error: 'Invalid token' });
            });
        }
      });
    } else {
      res.status(401).json({ error: 'Token not provided' });
    }
  };