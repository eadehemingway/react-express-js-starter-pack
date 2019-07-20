const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    trim: true
  },
  favouriteFilms: {
    type: Array
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
