const mongoose = require("mongoose"); // Erase if already required
const { Schema } = require("mongoose");
const DOCUMENT_NAME = "Log";
const COLLECTION = "Logs";

var logSchema = new mongoose.Schema(
  {
    status: String,
    method: String,
    r: Number,
    g: Number,
    b: Number,
    lifetime: Number,
  },
  {
    timestamps: true,
    collection: COLLECTION,
  }
);

module.exports = mongoose.model(DOCUMENT_NAME, logSchema);
