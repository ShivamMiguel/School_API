// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// estas duas routas no mundo real não devem existir por segurança
router.get('/:id', UserController.show);
router.get('/', loginRequired, UserController.index);

router.post('/', UserController.store);

// removemos os ids destas routas por questões de segurança, os ids devem sem pegos no token
router.patch('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index -> lista todos os usuarios - GET
store -> cria um novo usuário - POST
delete -> apaga um novo usuario - DELETE
show -> mostra um usuario - GET
update -> atualiza um usuario - PATCH / PUT
*/
