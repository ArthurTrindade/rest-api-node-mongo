class Home {

  index(req, res) {
    res.status(200).send({ok: true, user: req.userId })
  }

  create(req, res, next) {
    res.status(201).send(req.body);

  }

  update(req, res, next) {

    const id = req.params.id;
    res.status(201).send({
      id: id,
      item: req.body
    });

  }

  delete(req, res, next) {
    res.status(200).send(req.body);

  }
}

export default new Home();
