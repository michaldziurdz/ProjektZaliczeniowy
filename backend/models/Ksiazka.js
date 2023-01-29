const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ksiazkaSchema = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    genre: {
      type: String,
    },
    kind: {
      type: String,
    },
  },
  {
    collection: "Ksiazki",
  }
);

module.exports = mongoose.model("Ksiazki", ksiazkaSchema);
