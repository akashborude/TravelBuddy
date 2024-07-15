const mongoose = require('mongoose');

const trekSchema = new mongoose.Schema({
  date: {
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  trek_event_details: {
    difficultyLevel: { type: String, required: true },
    baseVillageTrek: { type: String, required: true },
    region: { type: String, required: true },
    totalTimeOfTrek: { type: String, required: true },
    duration: { type: String, required: true },
  },
  pickUpPoints: {
    pune: [
      {
        location: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
    mumbai: [
      {
        location: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
  },
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  image: {
    imageUrl: { type: String, required: true },
    imageSrc: { type: String, required: true },
  },
  type: { type: String, required: true },
  modifiedBy: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  details: { type: String, required: true },
  upcoming_batches: [
    {
      date: { type: Date, required: true },
      available_slots: { type: Number, required: true },
      booked_slots: { type: Number, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
  ],
  itinerary: [
    {
      day: { type: String, required: true },
      description: { type: String, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
  ],
  costInclude: [
    {
      item: { type: String, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
  ],
  costExclude: [
    {
      item: { type: String, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
  ],
  thingsToCarry: [
    {
      item: { type: String, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
  ],
  faqs: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
  ],
}, { versionKey: false });

const Trek = mongoose.model('Trek', trekSchema);

module.exports = Trek;