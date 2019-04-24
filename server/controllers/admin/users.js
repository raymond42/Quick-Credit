import users from '../../models/users';
import validateUser from '../../helpers/user';


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

// mark a user as verified or unverified
const markUser = (req, res) => {
  const { error } = validateUser.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }
  const userId = req.params.id;
  const userIndex = users.findIndex(user => user.id === parseInt(userId, 10));
  if (userIndex > -1) {
    const originalUser = users[userIndex];
    const email = users.find(e => e.email === req.body.email);
    if (!email) {
      res.status(404).json({
        status: 404,
        error: 'incorrect email',
      });
      return;
    }
    if (email.isAdmin !== 'true') {
      res.status(401).json({
        status: 401,
        error: 'Only Admin can change user status',
      });
      return;
    }
    const newUser = {
      id: originalUser.id,
      email: originalUser.email,
      firstName: originalUser.firstName,
      lastName: originalUser.lastName,
      address: originalUser.address,
      status: req.body.status,
      isAdmin: originalUser.isAdmin,
    };
    users[userIndex] = newUser;
    res.status(200).json({
      status: 200,
      data: newUser,
    });
    return;
  }
  res.status(404).json({
    status: 404,
    error: 'User not found',
  });
};
export { getUsers, getOneUser, markUser };
