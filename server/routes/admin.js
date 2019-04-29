import express from 'express';
import auth from '../middleware/auth';
import { getApplications, getOneApplication } from '../controllers/admin/applications';
import getCurrentLoans from '../controllers/admin/current';
import getRepaidLoans from '../controllers/admin/repaid';
import {
  getUsers, getOneUser, markUser, approve,
} from '../controllers/admin/users';
import transaction from '../controllers/admin/repaymentTransaction';

const router = express.Router();

// get all loan applications
router.get('/applications', auth, getApplications);

// get single loan application
router.get('/application/:id', auth, getOneApplication);

// get all users/clients
router.get('/users', auth, getUsers);

// get one client
router.get('/user/:id', auth, getOneUser);

// mark a client as verified or unverified
router.patch('/mark/:id', auth, markUser);

// get current loans
router.get('/current', auth, getCurrentLoans);

// get repaid loans
router.get('/repaid', auth, getRepaidLoans);

// reject or approve loan application
router.patch('/approve/:id', auth, approve);

// post repayment transaction
router.post('/transaction/:id', auth, transaction);


export default router;
