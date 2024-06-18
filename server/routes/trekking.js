// Import necessary modules
const express = require("express");
const router = express.Router();
const Trekking = require("../models/trekking"); // Import the Trekking model
const createError = require("http-errors");

// Users array
const users = ["akash.borude", "vaibhavraje.gaikwad", "tejas.gandhi"];

// Get all trekking data
router.get("/getAllTreks", async (req, res, next) => {
  try {
    const trekkingData = await Trekking.find();
    res.json(trekkingData);
  } catch (error) {
    next(error);
  }
});

// Get a specific trek by ID
router.get("/getTrekById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const trek = await Trekking.findById(id);
    if (!trek) {
      return next(createError(404, "Trek not found"));
    }
    res.json(trek);
  } catch (error) {
    next(error);
  }
});

// Create a new trek
router.post("/addNewTrek", async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  console.log(req.body);
  const newTrek = new Trekking(req.body);
  try {
    const savedTrek = await newTrek.save();
    res.status(201).json(savedTrek);
  } catch (error) {
    next(error);
  }
});

// Update a trek
router.put("/updateTrekById/:id", async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const updatedTrek = await Trekking.findByIdAndUpdate(
      id,
      { ...req.body, modifiedBy },
      { new: true }
    );
    if (!updatedTrek) {
      return next(createError(404, "Trek not found"));
    }
    res.json(updatedTrek);
  } catch (error) {
    next(error);
  }
});

// Delete a trek
router.delete("/deleteTrekById/:id", async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const deletedTrek = await Trekking.findByIdAndDelete(id);
    if (!deletedTrek) {
      return next(createError(404, "Trek not found"));
    }
    res.json({ message: "Trek deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;