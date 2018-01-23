const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose; // detstructured from above 

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);