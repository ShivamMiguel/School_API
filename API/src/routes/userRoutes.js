// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
index -> lista todos os usuarios - GET
store -> cria um novo usuário - POST
delete -> apaga um novo usuario - DELETE
show -> mostra um usuario - GET
update -> atualiza um usuario - PATCH / PUT
*/
