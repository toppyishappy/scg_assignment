const passport = require('passport-http')

passport.use(new BasicStrategy(
    function(userid, password, done) {
        console.log(userid)
    //   User.findOne({ username: userid }, function (err, user) {
    //     if (err) { return done(err); }
    //     if (!user) { return done(null, false); }
    //     if (!user.verifyPassword(password)) { return done(null, false); }
    // });
        return done(null, 'x');
    }
  ));


