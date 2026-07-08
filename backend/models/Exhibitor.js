const mongoose = require("mongoose");

const exhibitorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    companyName: {
      type: String,
      default: "",
    },

    ownerName: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    businessCategory: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    products: [
      {
        type: String,
      },
    ],

    expo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expo",
    },

    booth: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booth",
    },

    applicationStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Exhibitor", exhibitorSchema);