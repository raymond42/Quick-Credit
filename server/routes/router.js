import express from 'express';
import signup from '../controllers/users/signup';
import signin from '../controllers/users/signin';
import apply from '../controllers/users/apply';
import auth from '../middleware/auth';
import getHistory from '../controllers/users/getHistory';
import { getApplications, getOneApplication } from '../controllers/admin/applications';

const router = express.Router();

// signup
router.post('/signup', signup);
// signin
router.post('/signin', signin);
// apply
router.post('/apply', auth, apply);
router.get('/history/:id', auth, getHistory);
router.get('/applications', auth, getApplications);
router.get('/application/:id', auth, getOneApplication);

export default router;
