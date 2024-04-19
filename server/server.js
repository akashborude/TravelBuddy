const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
  .connect("mongodb://localhost:27017/TravelBuddy", {
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
app.post("/addNewTrek",require("./routes/trekking"));
app.get("/getAllTreks", require("./routes/trekking"));
app.get("/getTrekById/:id", require("./routes/trekking"));
app.put("/updateTrekById/:id", require("./routes/trekking"));
app.delete("/deleteTrekById/:id", require("./routes/trekking"));

// Routes for Camping
app.post("/addNewCamp", require("./routes/camping"));
app.get("/getAllCamps", require("./routes/camping"));
app.get("/getCampById/:id", require("./routes/camping"));
app.put("/updateCampById/:id", require("./routes/camping"));
app.delete("/deleteCampById/:id", require("./routes/camping"));

// Routes for Adventurous Activities
app.post("/addNewAdventure", require("./routes/adventurous"));
app.get("/getAllAdventure", require("./routes/adventurous"));
app.get("/getAdventureById/:id", require("./routes/adventurous"));
app.put("/updateAdventureById/:id", require("./routes/adventurous"));
app.delete("/deleteAdventureById/:id", require("./routes/adventurous"));

// Routes for Backpacking
app.post("/addNewBackpacking", require("./routes/backpacking"));
app.get("/getAllBackpacks", require("./routes/backpacking"));
app.get("/getBackpackById/:id", require("./routes/backpacking"));
app.put("/updateBackpackById/:id", require("./routes/backpacking"));
app.delete("/deleteBackpackById/:id", require("./routes/backpacking"));

// Import your models
const Trekking = require("./models/trekking");
const Adventours = require("./models/adventurous");
const Camping = require("./models/camping");
const Backpacking = require("./models/backpacking");




// ...rest of your application setup
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
