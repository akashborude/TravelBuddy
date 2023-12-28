const mongoose = require("mongoose");

const campingSchema = new mongoose.Schema({
  image: { type: String, required: true }, // Source URL for the image
  title: { type: String, required: true },
  date: {
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  location: { type: String, required: true },
  details: { type: String, required: true },
  upcoming_batches: [
    {
      date: { type: Date, required: true },
      available_slots: { type: Number, required: true },
      booked_slots: { type: Number, required: true },
    },
  ],
  itinerary: [
    {
      day: { type: Number, required: true },
      description: { type: String, required: true },
    },
  ],
  camp_event_details: {
    difficultyLevel: { type: String, required: true },
    baseVillageCamp: { type: String, required: true },
    region: { type: String, required: true },
    totalTimeOfCamp: { type: Number, required: true }, // Assuming it's in hours
    duration: { type: Number, required: true }, // Assuming it's in days
  },
  costInclude: [{ item: { type: String, required: true } }],
  costExclude: [{ item: { type: String, required: true } }],
  thingsToCarry: [{ item: { type: String, required: true } }],
  pickUpPoints: {
    pune: [{ location: { type: String, required: true } }],
    mumbai: [{ location: { type: String, required: false } }],
  },
  faqs: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  // Add more fields as per your requirements
});

const Camping = mongoose.model("Camping", campingSchema);

module.exports = Camping;