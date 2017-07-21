const User = require('../models/user');

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email or password' });
  }

  // Check if mail is already registered
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // Create and save user
    const user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) { return next(err); }

      // Respond success
      res.json({ success: 'true' });
    });
  });
}
