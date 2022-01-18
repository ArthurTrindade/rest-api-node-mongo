import mongoose from 'mongoose';
const { Schema } = mongoose;


const schema = new Schema({

  nome: {
    type: String,
    required: true,
    trim: true
  },

  sobrenome: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,

  },

  idade: {
    type: Number,
    required: true
  },

  peso: {
    type: Number,
    required: true
  },

  altura: {
    type: Number,
    required: true
  }

});

export default mongoose.model('Alunos', schema);



