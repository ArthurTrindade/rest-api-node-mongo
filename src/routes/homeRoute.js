import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);
router.post('/', homeController.create);
router.put('/:id', homeController.update);
router.delete('/', homeController.delete);

export default router;
