import currentLoans from '../../models/current';

const getCurrentLoans = (req, res) => {
  res.status(200).json({
    status: 200,
    data: currentLoans,
  });
};

export default getCurrentLoans;
