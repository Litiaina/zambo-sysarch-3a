const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URL;
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('SYSARCH32_DB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Register endpoint
app.post('/register', async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const { fullName, email, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user object
    const newUser = {
      fullName,
      email,
      password,
    };

    // Insert the new user into the "users" collection
    const result = await db.collection('users').insertOne(newUser);

    if (result.insertedId) {
      return res.status(200).json({ message: 'Registration successful' });
    } else {
      return res.status(500).json({ message: 'Failed to register user' });
    }
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const { email, password } = req.body;

    // Find the user by email in the database
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password === password) {
      // Password matches, user is successfully logged in
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Password does not match
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
