const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/userR');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  tlsAllowInvalidHostnames: false
})

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
