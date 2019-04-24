import applications from '../../models/applications';


// all applications
const getApplications = (req, res) => {
  res.status(200).json({
    status: 200,
    data: applications,
  });
};

// single application
const getOneApplication = (req, res) => {
  const application = applications.find(a => a.id === parseInt(req.params.id, 10));
  if (!application) {
    res.status(404).json({
      status: 404,
      error: 'application not found',
    });
  } else {
    res.status(200).json({
      status: 200,
      data: application,
    });
  }
};

export { getApplications, getOneApplication };
