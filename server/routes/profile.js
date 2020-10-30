const express = require('express');
const router = express.Router();

const { requireSignin } = require('../controllers/auth');
const { updateProfile } = require('../controllers/profile');
const { userById } = require('../controllers/user');

router.post('/user/:userId/profileSection', requireSignin, updateProfile)

router.param('userId', userById)

module.exports = router;