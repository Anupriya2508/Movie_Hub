const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string
const MONGODB_QRI = 'mongodb+srv://anupriyajayaraj08:anu2002p@moviehub.ebrtnz6.mongodb.net/?retryWrites=true&w=majority'; 


// Connect to MongoDB using the MONGODB_QRI variable
mongoose.connect(MONGODB_QRI);

mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

// User model
const User = mongoose.model('User', {
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// API Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      email,
      username,
      password, // Note: No encryption for simplicity
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { identifier, password } = req.body;

    // Check if the user exists by email or username
    const user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords (no encryption for simplicity)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // For simplicity, send a success message without a token
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
