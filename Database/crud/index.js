const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/crudDatabase')
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,  // Set default to current date
    },
});

// Model
const User = mongoose.model('user', userSchema);

// POST route to add a new user
app.post('/crudDatabase/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);  // Return the saved user data
    } catch (err) {
        res.status(400).json({ message: err.message });  // Proper error handling
    }
});

// GET route to retrieve users
app.get('/crudDatabase/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.post('/crudDatabase/users', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'User does not exist' });
      }
  
      // Check if the password matches
      if (user.password !== password) {
        return res.status(400).json({ message: 'Incorrect password' });
      }
  
      // If email and password match
      res.json({ message: 'Login successful', user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
