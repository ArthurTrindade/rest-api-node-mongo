import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Mongoose from 'mongoose';
const { Schema } = Mongoose;

const schema = new Schema({

  nome: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    select: false
  },

  createAt: {
    type: Date,
    default: Date.now,
  },

});

schema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});



export default Mongoose.model('User', schema);
