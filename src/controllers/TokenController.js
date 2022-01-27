import User from "../models/User"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
class Token {

  async create(req, res) {

    const { email = '', password='' } = req.body

    if(!email || !password){
      return res.status(400).json({
        error: ['Credenciais invalidas']
      })
    }

    const user = await User.findOne({ email }).select('+password');

    if(!user) {
      return res.status(400).json({
        error: ['Usuário não existe']
      });
    }

    if(!await bcrypt.compare(password, user.password))
      return res.status(400).json({ error: 'Senha inválida' })

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
      expiresIn: 86400,
    });

    return res.status(200).send({ user, token });

  }

}

export default new Token();
