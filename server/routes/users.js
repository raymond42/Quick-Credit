import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import apply from '../controllers/apply';
import auth from '../middleware/auth';
import getHistory from '../controllers/getHistory';

const router = express.Router();

// signup
router.post('/signup', signup);
// signin
router.post('/signin', signin);
// apply
router.post('/apply', auth, apply);
router.get('/history/:id', auth, getHistory);

export default router;
