import { Router } from 'express';
import auth from './auth.router';
import company from './company.router';
import user from './user.router';
import unit from './unit.router';

const router = Router();

router.use('/', auth);
router.use('/companies', company);
router.use('/users', user);
router.use('/units', unit);

export default router;
