const express = require('express');
const router = express.Router();
const { registerUser, loginUser,titleContent, getUser,editEntry,deleteEntry } = require('../controllers/userC');
const authenticate = require('../middleware/auth');
// Routes
router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/content',authenticate, titleContent);
router.put('/edit/:id',authenticate, editEntry);
router.delete('/delete/:id',authenticate, deleteEntry);
router.get("/users",authenticate,getUser);

module.exports = router;
