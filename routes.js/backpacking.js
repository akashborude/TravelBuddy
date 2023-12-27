const express = require("express");
const router = express.Router();
const Backpacking = require("../schema/backpacking");

// Get all backpacking data
router.get("/", async (req, res) => {
  try {
    const backpackingData = await Backpacking.find();
    res.json(backpackingData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific backpacking event by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const backpackingEvent = await Backpacking.findById(id);
    if (!backpackingEvent) {
      return res.status(404).json({ message: "Backpacking event not found" });
    }
    res.json(backpackingEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new backpacking event
router.post("/", async (req, res) => {
  const backpackingEvent = new Backpacking(req.body);
  try {
    const newBackpackingEvent = await backpackingEvent.save();
    res.status(201).json(newBackpackingEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a backpacking event
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedBackpackingEvent = await Backpacking.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBackpackingEvent) {
      return res.status(404).json({ message: "Backpacking event not found" });
    }
    res.json(updatedBackpackingEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a backpacking event
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBackpackingEvent = await Backpacking.findByIdAndDelete(id);
    if (!deletedBackpackingEvent) {
      return res.status(404).json({ message: "Backpacking event not found" });
    }
    res.json({ message: "Backpacking event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;