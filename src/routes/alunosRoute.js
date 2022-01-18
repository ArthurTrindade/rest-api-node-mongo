import { Router } from 'express';
import alunoController from '../controllers/AlunosControllers';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.create);


export default router;
