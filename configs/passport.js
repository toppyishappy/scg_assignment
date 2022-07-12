const passport = require('passport')
const {BasicStrategy} = require('passport-http');

passport.use(new BasicStrategy(
    function(usename, password, done) {
        if(usename === config.AUTH_USER && password === config.AUTH_PASS){
          done(null, usename)
        }else{
          let err = new Error('Unautorization')
          err.statusCode = 401
          done(err)
        }
    }
));