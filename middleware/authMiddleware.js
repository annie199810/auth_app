// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const header = req.header('authorization') || req.header('Authorization');
  if (!header) return res.status(401).json({ message: 'No token, authorization denied' });

  const parts = header.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Token format is invalid' });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // attach user (id, username, email) to request
    next();
  } catch (err) {
    console.error('Token verify error', err);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
