import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || header === '') return res.status(401).json({ status: 401, error: 'Unauthorized' });

    const token = jwt.verify(header, 'SECRET_KEY');
    req.user = token;
    next();
  } catch {
    return res.status(401).json({ status: 401, error: 'Invalid token!' });
  }
  return false;
};

export default authentication;
