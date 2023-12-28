const express = require("express");
const router = express.Router();
const Adventours = require("../schema/adventours"); // Import the Adventours model

// Get all adventours data
router.get("/", async (req, res) => {
  try {
    const adventoursData = await Adventours.find();
    res.json(adventoursData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific adventour by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const adventour = await Adventours.findById(id);
    if (!adventour) {
      return res.status(404).json({ message: "Adventour not found" });
    }
    res.json(adventour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new adventour
router.post("/", async (req, res) => {
  const newAdventour = new Adventours(req.body);
  try {
    const savedAdventour = await newAdventour.save();
    res.status(201).json(savedAdventour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an adventour
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedAdventour = await Adventours.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAdventour) {
      return res.status(404).json({ message: "Adventour not found" });
    }
    res.json(updatedAdventour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an adventour
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedAdventour = await Adventours.findByIdAndDelete(id);
    if (!deletedAdventour) {
      return res.status(404).json({ message: "Adventour not found" });
    }
    res.json({ message: "Adventour deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;