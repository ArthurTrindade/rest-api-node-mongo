import User from "../models/User"
import jwt from 'jsonwebtoken';

class Token {

  async create(req, res) {

    const { email = '', password='' } = req.body

    if(!email || !password){
      return res.status(400).json({
        error: ['Credenciais invalidas']
      })
    }

    const user = await User.findOne({ email, password });

    if(!user) {
      return res.status(401).json({
        error: ['Usuário não existe ou senha incorreta']
      });

    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.json({ token });

  }

}

export default new Token();
