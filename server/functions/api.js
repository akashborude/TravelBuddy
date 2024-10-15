const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const createError = require("http-errors");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure request logger
app.use(morgan("combined"));

// CORS configuration
app.use(
  cors({
    origin: "*", // Allow all origins for now, adjust as needed
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);
app.options("*", cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://teamtravelbuddypune:iQwQ7SkZVbeF32aV@cluster0.o0jccgf.mongodb.net/TravelBuddy",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

const router = express.Router();

// Routes for Trekking
router.post("/api/trekking/addNewTrek", require("../routes/trekking"));
router.post("/api/trekking/addNewTreks", require("../routes/trekking"));
router.get("/api/trekking/getAllTreks", require("../routes/trekking"));
router.get("/api/trekking/getTrekById/:id", require("../routes/trekking"));
router.put("/api/trekking/updateTrekById/:id", require("../routes/trekking"));
router.delete(
  "/api/trekking/deleteTrekById/:id",
  require("../routes/trekking")
);

// Routes for Camping
router.post("/api/camping/addNewCamp", require("../routes/camping"));
router.post("/api/camping/addNewCamps", require("../routes/camping"));
router.get("/api/camping/getAllCamps", require("../routes/camping"));
router.get("/api/camping/getCampById/:id", require("../routes/camping"));
router.put("/api/camping/updateCampById/:id", require("../routes/camping"));
router.delete("/api/camping/deleteCampById/:id", require("../routes/camping"));

// Routes for Adventurous Activities
router.post("/api/adventure/addNewAdventure", require("../routes/adventurous"));
router.post(
  "/api/adventure/addNewAdventures",
  require("../routes/adventurous")
);
router.get("/api/adventure/getAllAdventure", require("../routes/adventurous"));
router.get(
  "/api/adventure/getAdventureById/:id",
  require("../routes/adventurous")
);
router.put(
  "/api/adventure/updateAdventureById/:id",
  require("../routes/adventurous")
);
router.delete(
  "/api/adventure/deleteAdventureById/:id",
  require("../routes/adventurous")
);

// Routes for Backpacking
router.post(
  "/api/backpacking/addNewBackpacking",
  require("../routes/backpacking")
);
router.post(
  "/api/backpacking/addNewBackpackingEvents",
  require("../routes/backpacking")
);
router.get(
  "/api/backpacking/getAllBackpacks",
  require("../routes/backpacking")
);
router.get(
  "/api/backpacking/getBackpackById/:id",
  require("../routes/backpacking")
);
router.put(
  "/api/backpacking/updateBackpackById/:id",
  require("../routes/backpacking")
);
router.delete(
  "/api/backpacking/deleteBackpackById/:id",
  require("../routes/backpacking")
);

// Use the router with /api prefix
app.use("/api", router);

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
require("../models/trekking");
require("../models/adventurous");
require("../models/camping");
require("../models/backpacking");

module.exports.handler = serverless(app);
