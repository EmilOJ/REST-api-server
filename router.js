const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// Authenticator (passport middleware). Disable cookie session
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' })
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
