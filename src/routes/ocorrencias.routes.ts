import { Router } from 'express';
import { getOcorrencias } from '../controllers/ocorrencias.controller';

const router = Router();

router.get('/ocorrencias', getOcorrencias);

export default router;
