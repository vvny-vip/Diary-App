const express = require('express');
const router = express.Router();
const { registerUser, loginUser,titleContent } = require('../controllers/userC');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/content', titleContent);

module.exports = router;
