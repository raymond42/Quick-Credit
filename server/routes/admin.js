import express from 'express';
import auth from '../middleware/auth';
import { getApplications, getOneApplication } from '../controllers/admin/applications';
import { getUsers, getOneUser, markUser } from '../controllers/admin/users';
import getCurrentLoans from '../controllers/admin/current';
import getRepaidLoans from '../controllers/admin/repaid';

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
router.patch('/user/:id', auth, markUser);

// get current loans
router.get('/current', auth, getCurrentLoans);

// get repaid loans
router.get('/repaid', auth, getRepaidLoans);


export default router;
