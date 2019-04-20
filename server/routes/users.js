import express from 'express';
import signup from '../controllers/signup';

const router = express.Router();

// signup
router.post('/api/v1/users/signup', signup);

export default router;
