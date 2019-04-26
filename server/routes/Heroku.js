import express from 'express';
import signup from '../controllers/users/signup';
import signin from '../controllers/users/signin';
import apply from '../controllers/users/apply';
import getHistory from '../controllers/users/getHistory';
import { getApplications, getOneApplication } from '../controllers/admin/applications';
import { getUsers, getOneUser, markUser } from '../controllers/admin/users';
import getCurrentLoans from '../controllers/admin/current';
import getRepaidLoans from '../controllers/admin/repaid';


const router = express.Router();

// signup
router.post('/signup', signup);

// signin
router.post('/signin', signin);

// apply
router.post('/apply', apply);

// get loan repayment history
router.get('/history/:id', getHistory);

// get all loan applications
router.get('/applications', getApplications);

// get single loan application
router.get('/application/:id', getOneApplication);

// get all users/clients
router.get('/users', getUsers);

// get one client
router.get('/user/:id', getOneUser);

// mark a client as verified or unverified
router.patch('/user/:id', markUser);

// get current loans
router.get('/current', getCurrentLoans);

// get repaid loans
router.get('/repaid', getRepaidLoans);

export default router;
