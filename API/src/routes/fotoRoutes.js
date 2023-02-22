// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import multer from 'multer';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);

export default router;
