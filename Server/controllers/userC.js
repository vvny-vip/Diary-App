const {User,Entry} = require('../models/user');

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

//content
exports.titleContent = async (req, res) => {
    const { title, content ,date,mood} = req.body;
    try {
        const newEntry = new Entry({ title, content, date, mood });
        if (!title.trim() || !content.trim() || !date.trim() || !mood.trim()) {
            return res.status(400).send('All fields are required');
        }
        await newEntry.save();
        res.status(201).send('Entry saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving entry');
    }
};

exports.getUser = async (req,res) => {
  try {
    const users = await Entry.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
}
exports.editEntry = async (req, res) => {
    const { id } = req.params;
    const { title, content, date, mood } = req.body;
    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, { title, content, date, mood }, { new: true });
        if (!updatedEntry) {
            return res.status(404).send('Entry not found');
        }  
        res.status(200).send('Entry updated successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating entry');
    }
};
exports.deleteEntry = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEntry = await Entry.findByIdAndDelete(id);
        if (!deletedEntry) {
            return res.status(404).send('Entry not found');
        }
        res.status(200).send('Entry deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting entry');
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
