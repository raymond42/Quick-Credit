import jwt from 'jsonwebtoken';
import users from '../models/users';
import validateUserSignup from '../helpers/signup';

const signup = (req, res) => {
  const user = users.find(e => e.email === req.body.email);
  if (user) return res.status(400).send({ status: 400, error: 'The email is already registered' });

  const { error } = validateUserSignup.validation(req.body);
  if (error) {
    return res.status(400).send({ status: 400, errr: error.details[0].message });
  }

  const id = parseInt(users.length + 1, 10);
  const newUser = {
    id,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    address: req.body.address,
    status: req.body.status,
    isAdmin: req.body.isAdmin,
  };
  const token = jwt.sign(newUser, 'SECRET_KEY', { expiresIn: '15min' });
  users.push(newUser);
  res.status(201).send({
    status: 201,
    data: {
      token,
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    },
  });

  return false;
};

export default signup;
