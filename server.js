
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to LearnStack LMS Backend',
    status: 'Running'
  });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');

   const PORT = 5001;
app.listen(PORT, () => {
  console.log(`LearnStack backend running on port ${PORT}`);
});
  } catch (error) {
    console.error('Backend startup error:', error.message);
  }
}

startServer();
