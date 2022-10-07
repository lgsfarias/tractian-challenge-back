import { Router } from 'express';
import auth from './auth.router';
import company from './company.router';

const router = Router();

router.use('/', auth);
router.use('/companies', company);

export default router;
