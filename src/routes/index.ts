import { Router } from 'express';
import auth from './auth.router';

const router = Router();

router.use('/', auth);

export default router;
