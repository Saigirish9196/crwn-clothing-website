const User = require('../models/user')
const jwt = require("jsonwebtoken");
const passport = require('passport');

exports.signUp = (req,res)=>{
  
    const new_user = {
        name:req.body.displayName,
        username:req.body.username,
      }
  
      User.register(new_user,req.body.password , function(err, user) {
          console.log(user);
          
          if(err){
              console.log(err);
              return res.status(200).json({ error: err.message });
          }else{
              passport.authenticate('local')(req,res,function(){
                const jwtSecret = process.env.JWT_SECRET;
                const token = jwt.sign({ user }, jwtSecret);
                const {_id,name,username} = user;
                res.json({
                    message: 'Successfully registered, please login!',
                    token,
                    user:{_id,name,username}
                  });
              })
          }
  
      });

}


exports.signIn = (req,res) => {
    const user = new User({
        username:req.body.username,
        password:req.body.password
    })

    passport.authenticate("local", function(err, user, info) {
        
        if (user) {
          req.login(user, function(error) {
            if (!error) {
              const jwtSecret = process.env.JWT_SECRET;
              const token = jwt.sign({ user }, jwtSecret);
              const { _id, username, name} = user;
                return res.json({
                message:"Successfully Login!",
                token:token,
                user:{ _id, username, name }
                
              })
            } else {
              console.log(error);
              return res.status(422).json({ errors: error.errors });
            }
          });
        }else{
          
          res.status(200).json({
            error: "Username and/or password is invalid"
          });
        }
             
        
      })(req,res);
      
}


exports.signOut = (req,res) => {
  req.logout((err)=>{
    if(!err){
      res.status(200).json({
        message:"Successfully logOut!"
      })
    }
  });

}



exports.profile = (req, res) => {
  console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
      res.json({
        user: {
          name:req.user.name,
          username: req.user.username,
          _id: req.user._id,
        },
      });
  } else {
      res.json({ user:null });
  }
}
