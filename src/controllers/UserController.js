
import Users from "../models/User";
class User {

  async create(req, res) {

    try {
      const newUser = await Users.create(req.body);

      return res.status(201).json(newUser)

    } catch (e) {

      return res.status(400).json({
        message: 'Erro ao cadastrar o usuário'
      });
    }
  }

  async index(req, res) {

    try {
      const users = await Users.find();

      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        message: 'Erro para carregar usuarios'
      });
    }
  }

  async show(req, res, next) {

    try  {
      const user = await Users.findById(req.params.id);
      return res.status(200).json(user);

    } catch (e) {

      return res.json('User não encontrado');
    }
  }

  async update(req, res) {

    try  {
      const updateUser = await Users.findByIdAndUpdate(req.params.id, {
        $set: {
          nome: req.body.nome,
          email: req.body.email,
          password: req.body.password
        }
      }, { new: true });

      return res.status(200).json(updateUser);

    } catch (e) {

      return res.json('User não encontrado');
    }
  }

  async delete(req, res) {
    try  {
      await Users.findByIdAndDelete(req.params.id);
      return res.status(200).send('usuario deletado');

    } catch (e) {

      return res.json('Erro ao deletar usuario');
    }
  }
}

export default new User();
