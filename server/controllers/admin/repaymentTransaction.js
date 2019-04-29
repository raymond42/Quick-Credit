import history from '../../models/history';
import validateTrans from '../../helpers/transaction';

const transaction = (req, res) => {
  const repayment = history.findIndex(a => a.loanId === parseInt(req.params.id, 10));
  if (repayment > -1) {
    const { error } = validateTrans.validation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    const loanId = history.find(l => l.loanId === parseInt(req.body.loanId, 10));
    if (!loanId) {
      return res.status(404).json({
        status: 404,
        error: 'transaction history with that loan is not found',
      });
    }
    const repaymentTrans = history[repayment];
    return res.status(200).json({
      message: 'Successfully sent to the client',
      status: 200,
      data: repaymentTrans,
    });
  }
  return res.status(404).json({
    status: 404,
    error: 'user not found',
  });
};

export default transaction;
