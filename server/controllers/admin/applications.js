import applications from '../../models/applications';

const getApplications = (req, res) => {
  res.status(200).json({
    status: 200,
    data: applications,
  });
};

export default getApplications;
