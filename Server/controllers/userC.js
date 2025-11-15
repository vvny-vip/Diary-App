const {User,Entry} = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'adcbe124';
// Register user
exports.registerUser = async (req, res) => {
    const { Username, Email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({ Username, Email, password: hashedPassword });
        await newUser.save();
         const token = jwt.sign({Username:newUser.Username},SECRET_KEY,{expiresIn:'1h'});
    
        res.status(201).json({ message: 'User registered successfully',token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error registering user'});
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
        res.status(201).json({message:'Entry saved successfully'});
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
            return res.status(404).json({message:'Entry not found'});
        }  
        res.status(200).json({ message:'Entry updated successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Error updating entry'});
    }
};
exports.deleteEntry = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEntry = await Entry.findByIdAndDelete(id);
        if (!deletedEntry) {
            return res.status(404).send('Entry not found');
        }
        res.status(200).json({message:'Entry deleted successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Error deleting entry'});
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { Email,password} = req.body;
    
    try {
        const user = await User.findOne({ Email});
        if(!user){
            return res.status(400).json({ message: "User not found"});
        }
         const isMatch = await bcrypt.compare(password,user.password );

        if (isMatch) {
            const token = jwt.sign({Username:user.Username},SECRET_KEY,{expiresIn:'1h'});
    
          return res.status(200).json({ message: 'Login successful ✅', token});
        } else {
          return  res.status(401).json({message:'Invalid email or password'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Error logging in'});
    }
};
