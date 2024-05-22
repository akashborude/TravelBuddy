const express = require("express");
const router = express.Router();
const Adventours = require("../models/adventurous"); // Import the Adventours model
const createError = require("http-errors");

// Get all adventours data
router.get("/getAllAdventure", async (req, res, next) => {
  try {
    const adventoursData = await Adventours.find();
    res.json(adventoursData);
  } catch (error) {
    next(error);
  }
});

// Get a specific adventour by ID
router.get("/getAdventureById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const adventour = await Adventours.findById(id);
    if (!adventour) {
      return next(createError(404, "Adventour not found"));
    }
    res.json(adventour);
  } catch (error) {
    next(error);
  }
});

// Create a new adventour
router.post("/addNewAdventure", async (req, res, next) => {
  console.log(req.body);
  const newAdventour = new Adventours(req.body);
  try {
    const savedAdventour = await newAdventour.save();
    res.status(201).json(savedAdventour);
  } catch (error) {
    next(error);
  }
});

// Update an adventour
router.put("/updateAdventureById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedAdventour = await Adventours.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedAdventour) {
      return next(createError(404, "Adventour not found"));
    }
    res.json(updatedAdventour);
  } catch (error) {
    next(error);
  }
});

// Delete an adventour
router.delete("/deleteAdventureById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedAdventour = await Adventours.findByIdAndDelete(id);
    if (!deletedAdventour) {
      return next(createError(404, "Adventour not found"));
    }
    res.json({ message: "Adventour deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
