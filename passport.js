var mongoose = require("mongoose");
var User = mongoose.model("User");
var passport = require("passport");

//how we are going to login, it could be OAuth,it could be with a DB
var LocalStrategy = require("passport-local").Strategy 

passport.use(new LocalStrategy(authenticate));

function authenticate(email, password, done){
    done(null, false)        
}


passport.serialize();
passport.deserialize()