
const mongoose = require("mongoose");

const boothSchema = new mongoose.Schema(
  {
    expo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expo",
      required: true,
    },

    boothNumber: {
      type: String,
      required: true,
      trim: true,
    },

    boothName: {
      type: String,
      required: true,
      trim: true,
    },

    boothSize: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Available",
        "Reserved",
        "Booked",
      ],
      default: "Available",
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Booth",
  boothSchema
);
