import mongoose from "mongoose";

const linksSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true },
);

const Link = mongoose.model("Link", linksSchema);

export default Link;
