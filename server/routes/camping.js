// Import required modules
const express = require("express");
const router = express.Router();
const Camping = require("../schema/camping");

// Get all camping data
router.get("/", async (req, res) => {
  try {
    const campingData = await Camping.find();
    res.json(campingData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific camping by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const camp = await Camping.findById(id);
    if (!camp) {
      return res.status(404).json({ message: "Camp not found" });
    }
    res.json(camp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new camp
router.post("/", async (req, res) => {
  const camp = new Camping(req.body);
  try {
    const newCamp = await camp.save();
    res.status(201).json(newCamp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a camp
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedCamp = await Camping.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCamp) {
      return res.status(404).json({ message: "Camp not found" });
    }
    res.json(updatedCamp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a camp
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCamp = await Camping.findByIdAndDelete(id);
    if (!deletedCamp) {
      return res.status(404).json({ message: "Camp not found" });
    }
    res.json({ message: "Camp deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;