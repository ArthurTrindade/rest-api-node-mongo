class Home {

  index(req, res) {
    res.status(200).send({
      title: 'Node Stores API',
      version: '0.0.1'
    })
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
