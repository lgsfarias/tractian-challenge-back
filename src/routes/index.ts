import { Router } from 'express';
import auth from './auth.router';
import company from './company.router';
import user from './user.router';
import unit from './unit.router';
import employee from './employee.router';
import asset from './asset.router';

const router = Router();

router.use('/', auth);
router.use('/companies', company);
router.use('/users', user);
router.use('/units', unit);
router.use('/employees', employee);
router.use('/assets', asset);

export default router;
