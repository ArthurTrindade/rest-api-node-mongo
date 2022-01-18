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
    required: true
  }

});

export default Mongoose.model('User', schema);
