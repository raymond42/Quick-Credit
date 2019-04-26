import express from 'express';
import signup from '../controllers/users/signup';
import signin from '../controllers/users/signin';
import apply from '../controllers/users/apply';
import auth from '../middleware/auth';
import getHistory from '../controllers/users/getHistory';

const router = express.Router();

// signup
router.post('/signup', signup);

// signin
router.post('/signin', signin);

// apply
router.post('/apply', auth, apply);

// get loan repayment history
router.get('/history/:id', auth, getHistory);

export default router;
