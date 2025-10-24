const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userR');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mahi')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/', userRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
