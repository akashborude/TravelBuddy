// Import necessary modules
const express = require("express");
const router = express.Router();
const Trekking = require("../models/trekking"); // Import the Trekking model

// Get all trekking data
router.get("/getAllTreks", async (req, res) => {
  try {
    const trekkingData = await Trekking.find();
    res.json(trekkingData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific trek by ID
router.get("/getTrekById/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const trek = await Trekking.findById(id);
    if (!trek) {
      return res.status(404).json({ message: "Trek not found" });
    }
    res.json(trek);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new trek
router.post("/addNewTrek", async (req, res) => {
  const newTrek = new Trekking(req.body);
  try {
    const savedTrek = await newTrek.save();
    res.status(201).json(savedTrek);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a trek
router.put("/updateTrekById/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTrek = await Trekking.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTrek) {
      return res.status(404).json({ message: "Trek not found" });
    }
    res.json(updatedTrek);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a trek
router.delete("/deleteTrekById/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTrek = await Trekking.findByIdAndDelete(id);
    if (!deletedTrek) {
      return res.status(404).json({ message: "Trek not found" });
    }
    res.json({ message: "Trek deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;