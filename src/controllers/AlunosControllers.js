import Alunos from "../models/Alunos";

class Aluno {
  async create(req, res, next) {
    try {
      const newAluno = await Alunos.create(req.body);
      return res.status(201).json(newAluno);
    } catch (e) {
      return res.status(400).json({
        message: "Erro ao cadastrar o aluno",
      });
    }
  }

  async index(req, res, next) {

    try {
      const alunos = await Alunos.find();

      return res.json(alunos);

    } catch (e) {

      return res.status(400).json('falha ao listar alunos');
    }

  }

  async show(req, res, next) {}

  async delete(req, res, next) {}
}

export default new Aluno();
