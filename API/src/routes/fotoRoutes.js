// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies

import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
