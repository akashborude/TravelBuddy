const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const createError = require("http-errors");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Create log directory if it doesn't exist
const logDirectory = path.join(__dirname, "logs");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Create a write stream for request logs
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

// Create a write stream for error logs
const errorLogStream = fs.createWriteStream(
  path.join(logDirectory, "error.log"),
  { flags: "a" }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure request logger
app.use(morgan("combined", { stream: accessLogStream }));

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204, // Added to handle preflight OPTIONS request
  })
);
app.options("*", cors());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://teamtravelbuddypune:iQwQ7SkZVbeF32aV@cluster0.o0jccgf.mongodb.net/TravelBuddy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your server or define routes here
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

// Routes for Trekking
app.post("/addNewTrek", require("./routes/trekking"));
app.post("/addNewTreks", require("./routes/trekking")); // New route
app.get("/getAllTreks", require("./routes/trekking"));
app.get("/getTrekById/:id", require("./routes/trekking"));
app.put("/updateTrekById/:id", require("./routes/trekking"));
app.delete("/deleteTrekById/:id", require("./routes/trekking"));

// Routes for Camping
app.post("/addNewCamp", require("./routes/camping"));
app.post("/addNewCamps", require("./routes/camping")); // New route
app.get("/getAllCamps", require("./routes/camping"));
app.get("/getCampById/:id", require("./routes/camping"));
app.put("/updateCampById/:id", require("./routes/camping"));
app.delete("/deleteCampById/:id", require("./routes/camping"));

// Routes for Adventurous Activities
app.post("/addNewAdventure", require("./routes/adventurous"));
app.post("/addNewAdventures", require("./routes/adventurous")); // New route
app.get("/getAllAdventure", require("./routes/adventurous"));
app.get("/getAdventureById/:id", require("./routes/adventurous"));
app.put("/updateAdventureById/:id", require("./routes/adventurous"));
app.delete("/deleteAdventureById/:id", require("./routes/adventurous"));

// Routes for Backpacking
app.post("/addNewBackpacking", require("./routes/backpacking"));
app.post("/addNewBackpackingEvents", require("./routes/backpacking")); // New route
app.get("/getAllBackpacks", require("./routes/backpacking"));
app.get("/getBackpackById/:id", require("./routes/backpacking"));
app.put("/updateBackpackById/:id", require("./routes/backpacking"));
app.delete("/deleteBackpackById/:id", require("./routes/backpacking"));



// // Upload Image
// app.use('/uploadImage', uploadImageRoute);

// Error handling middleware
app.use((req, res, next) => {
  next(createError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

// Import your models
const Trekking = require("./models/trekking");
const Adventours = require("./models/adventurous");
const Camping = require("./models/camping");
const Backpacking = require("./models/backpacking");

// ...rest of your application setup

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
