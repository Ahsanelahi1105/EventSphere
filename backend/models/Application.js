const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    // Exhibitor who applied
    exhibitor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exhibitor",
      required: true,
    },

    // Expo for which exhibitor applied
    expo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expo",
      required: true,
    },

    // Application Status
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);
