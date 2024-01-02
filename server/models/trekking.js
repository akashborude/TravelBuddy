const mongoose = require("mongoose");

const trekkingSchema = new mongoose.Schema({
  image: { type: String }, // Source URL for the image
  title: { type: String },
  date: {
    start_date: { type: Date },
    end_date: { type: Date },
  },
  location: { type: String },
  details: { type: String },
  upcoming_batches: [
    {
      date: { type: Date },
      available_slots: { type: Number },
      booked_slots: { type: Number },
    },
  ],
  itinerary: [
    {
      day: { type: Number },
      description: { type: String },
    },
  ],
  trek_event_details: {
    difficultyLevel: { type: String },
    baseVillageTrek: { type: String },
    region: { type: String },
    totalTimeOfTrek: { type: Number }, // Assuming it's in hours
    duration: { type: Number }, // Assuming it's in days
  },
  costInclude: [{ item: { type: String } }],
  costExclude: [{ item: { type: String } }],
  thingsToCarry: [{ item: { type: String } }],
  pickUpPoints: {
    pune: [{ location: { type: String } }],
    mumbai: [{ location: { type: String } }],
  },
  faqs: [
    {
      question: { type: String },
      answer: { type: String },
    },
  ],
  // Add more fields as per your requirements
});


const Trekking = mongoose.model("Trekking", trekkingSchema);

module.exports = Trekking;