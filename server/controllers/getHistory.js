import history from '../models/history';

const getHistory = (req, res) => {
  const loanHistory = history.find(h => h.id === parseInt(req.params.id, 10));
  if (!loanHistory) {
    res.status(404).json({
      status: 404,
      error: 'no history found for that loan',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: {
      loanId: loanHistory.loanId,
      createdOn: loanHistory.createdOn,
      amount: loanHistory.amount,
      monthlyInstallment: loanHistory.monthlyInstallment,
      paidAmount: loanHistory.paidAmount,
      balance: loanHistory.balance,
    },
  });
};

export default getHistory;
