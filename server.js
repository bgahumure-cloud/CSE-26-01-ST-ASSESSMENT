const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const beneficiaryRoutes = require('./routes/beneficiaries');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection - removed deprecated options
mongoose.connect('mongodb://127.0.0.1:27017/refugee-support')
.then(() => console.log(' Connected to MongoDB'))
.catch(err => console.error(' Could not connect to MongoDB:', err));

// Routes
app.use('/api/beneficiaries', beneficiaryRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send(' Refugee Support API is running');
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});