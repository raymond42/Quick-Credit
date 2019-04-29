const applications = [];

const newApplication1 = {
  id: 1,
  user: 'Raymond Gakwaya',
  createdOn: '01/01/2019',
  status: 'pending',
  repaid: 'false',
  tenor: '12 months',
  amount: 600000,
  interest: 30000,
  paymentInstallment: 52500,
  balance: 6000000,
};

applications.push(newApplication1);

const newApplication2 = {
  id: 2,
  user: 'Chris Dalvan',
  createdOn: '01/01/2019',
  status: 'pending',
  repaid: 'false',
  tenor: '12 months',
  amount: 600000,
  interest: 30000,
  paymentInstallment: 52500,
  balance: 6000000,
};

applications.push(newApplication2);
export default applications;
