
import Alunos from "../models/Alunos";

class Aluno {

  async create(req, res, next) {
    try {

      let newAluno = await Alunos.create(req.body);
      return res.status(201).json(newAluno);

    } catch (e) {
      return res.status(400).json({
        message: 'Erro ao cadastrar o aluno'
      });

    }

  }

  async index(req, res, next) {

    await Alunos.find({}, 'nome sobrenome').then(data => {
      res.status(200).send(data);

    }).catch(e => {
      res.status(400).send(e);
    })

  }



}


export default new Aluno();
