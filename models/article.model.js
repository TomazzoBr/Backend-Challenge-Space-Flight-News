const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  id: { type: String, required: true },
  featured: { type: Boolean, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  imageUrl: { type: String, required: true },
  newsSite: { type: String, required: true },
  summary: { type: String, required: true },
  publishedAt: { type: String, required: true },
  launches: [
    {
      id: String,
      provider: String,
    },
  ],
  events: [
    {
      id: String,
      provider: String,
    },
  ],
});

module.exports = mongoose.model("questions", QuestionSchema);
