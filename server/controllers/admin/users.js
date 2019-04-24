import users from '../../models/users';


// all applications
const getUsers = (req, res) => {
  res.status(200).json({
    status: 200,
    data: users,
  });
};

// single application
const getOneUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id, 10));
  if (!user) {
    res.status(404).json({
      status: 404,
      error: 'user not found',
    });
  } else {
    res.status(200).json({
      status: 200,
      data: user,
    });
  }
};

export { getUsers, getOneUser };
