import applications from '../../models/applications';

const getApplications = (req, res) => {
  if (!applications.length) {
    res.status(404).json({
      status: 404,
      error: 'no application found',
    });
  }
  res.status(200).json({
    status: 200,
    data: applications,
  });
};

export default getApplications;
