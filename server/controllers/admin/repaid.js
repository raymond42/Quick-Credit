import repaidLoans from '../../models/repaid';

const getRepaidLoans = (req, res) => {
  res.status(200).json({
    status: 200,
    data: repaidLoans,
  });
};

export default getRepaidLoans;
