
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


    try {
      const alunos = Alunos.find({}, 'nome sobrenome')

      return res.status(200).json(alunos);
    } catch(e) {

    }

    await Alunos.find({}, 'nome sobrenome').then(data => {
      res.status(200).send(data);

    }).catch(e => {
      res.status(400).send(e);
    })

  }

  async show(req, res, next) {

  }

  async delete(req, res, next) {




  }


}


export default new Aluno();
