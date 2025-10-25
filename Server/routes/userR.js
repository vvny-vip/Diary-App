const express = require('express');
const router = express.Router();
const { registerUser, loginUser,titleContent, getUser } = require('../controllers/userC');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/content', titleContent);
router.get("/users",getUser);

module.exports = router;
