// routes/uploadImage.js

const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer for handling file uploads
const { v4: uuidv4 } = require('uuid'); // Import uuid for generating unique filenames
const fs = require('fs'); // Import fs for file system operations
const path = require('path'); // Import path for working with file paths
const { MongoClient } = require('mongodb'); // Import MongoClient for MongoDB operations

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4(); // Generate a unique filename using uuid
    const extension = path.extname(file.originalname); // Get the file extension
    cb(null, `${uniqueFilename}${extension}`); // Set the filename with the original extension
  }
});

// Multer upload configuration
const upload = multer({ storage: storage });

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const dbName = 'your_database'; // Replace 'your_database' with your actual database name
const collectionName = 'images'; // Define the collection name for storing images

// Define route for image upload
router.post('/', upload.single('image'), (req, res) => {
  try {
    // Get the uploaded image file
    const image = req.file;

    // Check if image file exists
    if (!image) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    // Connect to MongoDB
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to connect to database' });
      }

      // Access the database and collection
      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      // Insert the image into MongoDB
      collection.insertOne({ filename: image.filename }, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to save image to database' });
        }

        // Generate URL for accessing the stored image
        const imageUrl = `https://example.com/uploads/${image.filename}`;

        // Send the URL of the stored image in the response
        res.json({ imageUrl });

        // Close the MongoDB connection
        client.close();
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
