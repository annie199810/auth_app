
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getProfile } = require('../controllers/userController');

/**
 * @route GET /api/user/me
 * @desc Get current user info (protected)
 * @header Authorization: Bearer <token>
 */
router.get('/me', auth, getProfile);

module.exports = router;
