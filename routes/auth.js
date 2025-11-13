// routes/auth.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { register, login } = require('../controllers/authController');

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @body { username, email, password }
 */
router.post(
  '/register',
  [
    check('username', 'Username is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6+ chars').isLength({ min: 6 })
  ],
  register
);

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT
 * @body { emailOrUsername, password }
 */
router.post(
  '/login',
  [
    check('emailOrUsername', 'Email or username is required').notEmpty(),
    check('password', 'Password is required').exists()
  ],
  login
);

module.exports = router;
