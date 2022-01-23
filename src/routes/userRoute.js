import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Na nossa aplicação essas rotas não tem que existir para um usuário
router.get('/', loginRequired, userController.index);
router.get('/', userController.show);

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
