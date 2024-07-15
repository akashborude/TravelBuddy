const mongoose = require("mongoose");

const trekkingSchema = new mongoose.Schema(
  {
    image: {
      imageUrl: { type: String, required: true },
      imageSrc: { type: String, required: true },
    },
    status : {type: String, required: true},
    registrationLink:{ type: String, required: false},
    title: { type: String, required: true },
    price: { type: String, required: true },
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
          day: { type: String, required: true },
          events: [
            {
              time: { type: String, required: true },
              description: { type: String, require: true },
            }
          ]
        }
      ],
    trek_event_details: {
      difficultyLevel: { type: String, required: true },
      baseVillageTrek: { type: String, required: true },
      region: { type: String, required: true },
      totalTimeOfTrek: { type: String, required: true },
      duration: { type: String, required: true },
    },
    costInclude: [
      {
        item: { type: String, required: true }
      },
    ],
    costExclude: [
      {
        item: { type: String, required: true },
      },
    ],
    thingsToCarry: [
      {
        item: { type: String, required: true },
  
      },
    ],
    pickUpPoints: {
      pune: [
        {
          location: { type: String, required: true },
          
        },
      ],
      mumbai: [
        {
          location: { type: String, required: true },
         
        },
      ],
    },
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
        
      },
    ],
  },
  { versionKey: false }
);

const Trekking = mongoose.model("Trekking", trekkingSchema);

module.exports = Trekking;
