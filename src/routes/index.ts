import { Router } from 'express';
import auth from './auth.router';
import company from './company.router';
import user from './user.router';

const router = Router();

router.use('/', auth);
router.use('/companies', company);
router.use('/users', user);

export default router;
