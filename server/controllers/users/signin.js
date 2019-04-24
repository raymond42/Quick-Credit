import jwt from 'jsonwebtoken';
import users from '../../models/users';
import validateUserSignin from '../../helpers/signin';

const signin = (req, res) => {
  const userSchema = {
    email: req.body.email,
    password: req.body.password,
  };
  // Validate user inputs
  const { error } = validateUserSignin.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }

  // Check if the entered email exists
  const user = users.find(e => e.email === userSchema.email);
  //   if user doesn't exist
  if (!user) {
    return res.status(404).json({
      status: 404,
      error: 'User not found',
    });
  }

  // Check if the entered password is correct
  const password = users.find(p => p.password === req.body.password);
  //   if password is Incorrect
  if (!password) {
    return res.status(400).json({
      status: 400,
      error: 'Incorrect password',
    });
  }

  // if everything is correct
  // generate token
  const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });

  return res.status(200).json({
    status: 200,
    data: {
      token,
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });
};

export default signin;
