const mongoose = require('../db');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema( {

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//Encriptar senha -- o this faz referencia ao objeto UserSchema

UserSchema.pre('save', async ( next ) => {
  const hash = await bcrypt.hash( this.password, 10 );
  this.password = hash;

  next();
})

const User = mongoose.model('UserSchema');

module.exports = User;