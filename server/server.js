const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or define routes here
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

// Import your models
const Trekking = require('./models/trekking');
const Adventours = require('./models/adventours');
const Camping = require('./models/camping');
const Backpacking = require('./models/backpacking');

// ...rest of your application setup
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(cors());