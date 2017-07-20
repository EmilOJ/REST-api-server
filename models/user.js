const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

// Register the model
const model = mongoose.model('user', userSchema);

// Export model
module.exports = model;
