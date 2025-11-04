const express = require('express');
const router = express.Router();
const { registerUser, loginUser,titleContent, getUser,editEntry,deleteEntry } = require('../controllers/userC');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/content', titleContent);
router.put('/edit/:id', editEntry);
router.delete('/delete/:id', deleteEntry);
router.get("/users",getUser);

module.exports = router;
