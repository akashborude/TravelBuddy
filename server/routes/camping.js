// Import required modules
const express = require("express");
const router = express.Router();
const Camping = require("../models/camping");
const createError = require("http-errors");

// Get all camping data
router.get("/getAllCamps", async (req, res, next) => {
  try {
    const campingData = await Camping.find();
    res.json(campingData);
  } catch (error) {
    next(error);
  }
});

// Get a specific camping by ID
router.get("/getCampById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const camp = await Camping.findById(id);
    if (!camp) {
      return next(createError(404, "Camp not found"));
    }
    res.json(camp);
  } catch (error) {
    next(error);
  }
});

// Create a new camp
router.post("/addNewCamp", async (req, res, next) => {
  const camp = new Camping(req.body);
  try {
    const newCamp = await camp.save();
    res.status(201).json(newCamp);
  } catch (error) {
    next(error);
  }
});

// Update a camp
router.put("/updateCampById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedCamp = await Camping.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCamp) {
      return next(createError(404, "Camp not found"));
    }
    res.json(updatedCamp);
  } catch (error) {
    next(error);
  }
});

// Delete a camp
router.delete("/deleteCampById/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedCamp = await Camping.findByIdAndDelete(id);
    if (!deletedCamp) {
      return next(createError(404, "Camp not found"));
    }
    res.json({ message: "Camp deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
