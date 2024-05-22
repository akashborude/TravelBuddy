const express = require("express");
const router = express.Router();
const Backpacking = require("../models/backpacking");
const createError = require("http-errors");

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
  try {
    const updatedBackpackingEvent = await Backpacking.findByIdAndUpdate(
      id,
      req.body,
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
