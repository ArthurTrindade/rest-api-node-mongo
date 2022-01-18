import express from 'express';

import homeRoute from './src/routes/homeRoute';
import alunosRoute from './src/routes/alunosRoute'
import userRoute from './src/routes/userRoute';
import tokenRoute from './src/routes/tokenRoute'

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/alunos/', alunosRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);

  }

}

export default new App().app;
