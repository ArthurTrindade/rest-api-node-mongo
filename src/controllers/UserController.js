import Users from "../models/User";
class User {
  async create(req, res, next) {
    try {
      const newUser = await Users.create(req.body);

      return res.status(201).json(newUser);

    } catch (e) {
      return res.status(400).json({
        message: "Erro ao cadastrar o usuário",
      });
    }
  }

  async index(req, res) {
    try {
      const users = await Users.find();
      console.log('User id', req.userId);
      console.log('User id', req.userEmail);

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
      return res.status(200).json(user);
    } catch (e) {
      return res.json("User não encontrado");
    }
  }

  async update(req, res) {

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
