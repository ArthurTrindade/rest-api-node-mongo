import { Router } from 'express';
import homeController from '../controllers/HomeController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, homeController.index);
router.post('/', homeController.create);
router.put('/:id', homeController.update);
router.delete('/', homeController.delete);

export default router;
