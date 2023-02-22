// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.get('/:id', loginRequired, alunoController.show);
router.patch('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
