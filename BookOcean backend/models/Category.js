const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [2, "Name must be at least 2 characters."],
      maxLength: [100, "Name is too large."],
      lowercase: true,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
