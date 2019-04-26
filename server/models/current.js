const currentLoans = [];

const loan1 = {
  id: 1,
  user: 'Raymond Gakwaya',
  status: 'approved',
  createdOn: '01/01/2019',
  repaid: 'false',
  tenor: '12 months',
  amount: 600000,
  interest: 30000,
  paymentInstallment: 52500,
  balance: 390000,
};
currentLoans.push(loan1);

const loan2 = {
  id: 2,
  user: 'Christian Dalvan',
  status: 'approved',
  createdOn: '01/01/2019',
  repaid: 'false',
  tenor: '12 months',
  amount: 600000,
  interest: 30000,
  paymentInstallment: 52500,
  balance: 390000,
};
currentLoans.push(loan2);

const loan3 = {
  id: 3,
  user: 'Joe Joseph',
  status: 'approved',
  createdOn: '01/01/2019',
  repaid: 'false',
  tenor: '12 months',
  amount: 600000,
  interest: 30000,
  paymentInstallment: 52500,
  balance: 390000,
};
currentLoans.push(loan3);
export default currentLoans;
