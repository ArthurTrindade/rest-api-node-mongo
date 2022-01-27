import Users from "../models/User";
import jwt from 'jsonwebtoken';
class User {

  async create(req, res, next) {

    const { email } = req.body;

    try {

      if (await Users.findOne({ email })) {
        return res.status(400).send({ error: 'Usuário já existe' });
      }

      const user = await Users.create(req.body);

      user.password = undefined;

      const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
        expiresIn: 86400,

      });

      return res.status(201).send({ user, token });

    } catch (e) {
      return res.status(400).json({
        message: "Erro ao cadastrar o usuário",
      });
    }
  }

  async index(req, res) {
    try {
      const users = await Users.find({}, 'id nome email');
      console.log(req.userId);
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        message: "Erro para carregar usuarios",
      });
    }
  }

  async show(req, res, next) {
    try {
      const user = await Users.findById(req.params.id);
      const { id, nome, email } = user;

      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.json("User não encontrado");
    }
  }

  async update(req, res) {

    try {

      const updateUser = await Users.findByIdAndUpdate(req.userId, {
        $set: {
          nome: req.body.nome,
          email: req.body.email,
          password: req.body.password
        }
      }, { new: true });

      return res.status(201).json(updateUser);

    } catch(e) {

      return res.status(400).json({
        error: 'Falha ao atualizar usuário'
      })
    }

  }

  async delete(req, res) {
    try {
      await Users.findByIdAndDelete(req.userId);

      return res.status(200).send("usuario deletado");
    } catch (e) {
      return res.json("Erro ao deletar usuario");
    }
  }
}

export default new User();
