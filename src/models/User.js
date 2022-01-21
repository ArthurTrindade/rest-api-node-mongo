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

function passwordIsValid(password){
  return bcryptjs.compare(password, this.password_hash);
}

export default Mongoose.model('User', schema);
