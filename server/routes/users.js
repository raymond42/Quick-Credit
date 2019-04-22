import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import apply from '../controllers/apply';
import auth from '../middleware/auth';

const router = express.Router();

// signup
router.post('/signup', signup);
// signin
router.post('/signin', signin);
// apply
router.post('/apply', auth, apply);

export default router;
