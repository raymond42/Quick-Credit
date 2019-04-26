import express from 'express';
import heroku from '../controllers/deployment/heroku';

const router = express.Router();

// welcoming page on heroku
router.get('/', heroku);

export default router;
