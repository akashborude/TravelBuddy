const express = require("express");
const router = express.Router();
const Backpacking = require("../models/backpacking");
const createError = require("http-errors");

// Users array
const users = ["akash.borude", "vaibhavraje.gaikwad", "tejas.gandhi"];

// Get all backpacking data
router.get("/getAllBackpacks", async (req, res, next) => {
  try {
    const backpackingData = await Backpacking.find();
    res.json(backpackingData);
  } catch (error) {
    next(error);
  }
});

// Get a specific backpacking event by ID
router.get("/getBackpackById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const backpackingEvent = await Backpacking.findById(id);
    if (!backpackingEvent) {
      return next(createError(404, "Backpacking event not found"));
    }
    res.json(backpackingEvent);
  } catch (error) {
    next(error);
  }
});

// Create a new backpacking event
router.post("/addNewBackpacking", async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  const backpackingEvent = new Backpacking(req.body);
  try {
    const newBackpackingEvent = await backpackingEvent.save();
    res.status(201).json(newBackpackingEvent);
  } catch (error) {
    next(error);
  }
});

// Update a backpacking event
router.put("/updateBackpackById/:id", async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const updatedBackpackingEvent = await Backpacking.findByIdAndUpdate(
      id,
      { ...req.body, modifiedBy },
      { new: true }
    );
    if (!updatedBackpackingEvent) {
      return next(createError(404, "Backpacking event not found"));
    }
    res.json(updatedBackpackingEvent);
  } catch (error) {
    next(error);
  }
});

// Delete a backpacking event
router.delete("/deleteBackpackById/:id", async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const deletedBackpackingEvent = await Backpacking.findByIdAndDelete(id);
    if (!deletedBackpackingEvent) {
      return next(createError(404, "Backpacking event not found"));
    }
    res.json({ message: "Backpacking event deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;