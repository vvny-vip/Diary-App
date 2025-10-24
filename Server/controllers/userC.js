const User = require('../models/user');

// Register user
exports.registerUser = async (req, res) => {
    const { Username, Email, password } = req.body;
    try {
        const newUser = new User({ Username, Email, password });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error registering user');
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { Email, password } = req.body;
    try {
        const user = await User.findOne({ Email, password });
        if (user) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error logging in');
    }
};
