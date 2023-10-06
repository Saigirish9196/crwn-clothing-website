const express = require('express');
const router = express.Router();
const User = require('./models/user')
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const session = require('express-session');
const { signUp, signIn, signOut, dashbord, profile} = require('./controllers/user-controller');
const { requireAuth } = require('./middleware/require');
const LocalStrategy = require('passport-local').Strategy;

router.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));

router.use(passport.initialize());
router.use(passport.session());

passport.use(User.createStrategy());



// use static serialize and deserialize of model for passport session support
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.get('/', (req, res) => {
    res.send('Hello router')
  })

router.post('/signUp',signUp)
router.post('/signIn',signIn)
router.get('/signOut',signOut);
// router.get('/dashboard',requireAuth,dashbord)
router.get('/dashboard',profile)


module.exports = router;