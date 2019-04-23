import moment from 'moment';
import loans from '../models/loans';
import validateLoans from '../helpers/loans';
import users from '../models/users';

const apply = (req, res) => {
  const { error } = validateLoans.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
  const loan = loans.find(l => l.email === req.body.email);
  if (loan) {
    return res.status(403).json({
      status: 403,
      error: 'you have another loan',
    });
  }

  const id = parseInt(loans.length + 1, 10);
  const newLoan = {
    id,
    createdOn: moment().format('LL'),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tenor: req.body.tenor,
    amount: req.body.amount,
    paymentInstallment: req.body.paymentInstallment,
    status: req.body.status || 'pending',
    balance: req.body.balance,
    interest: req.body.interest,
  };

  const user = users.find(e => e.email === newLoan.email);
  if (!user) {
    return res.status(404).json({
      status: 404,
      error: 'User not found',
    });
  }

  loans.push(newLoan);
  return res.status(201).json({
    status: 201,
    data: newLoan,
  });
};

export default apply;
