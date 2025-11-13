
const User = require('../models/User');

const getProfile = async (req, res) => {
  try {
  
    const userId = req.user.id;

    const user = await User.findById(userId).select('-password -__v');
    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.json({ user });
  } catch (err) {
    console.error('Get profile error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProfile };
