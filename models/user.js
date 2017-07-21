const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  }
});

// On Save Hook, encrypt password
// Invoke before saving model
userSchema.pre('save', function(next) {
  const user = this;

  // Generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) password using generated salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      user.password = hash;
      // Save model
      next();
    });
  });
});

// Register the model
const model = mongoose.model('user', userSchema);

// Export model
module.exports = model;
