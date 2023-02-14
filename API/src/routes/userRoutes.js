// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);

export default router;

/*
index -> lista todos os usuarios - GET
store -> cria um novo usuário - POST
delete -> apaga um novo usuario - DELETE
show -> mostra um usuario - GET
update -> atualiza um usuario - PATCH / PUT
*/
