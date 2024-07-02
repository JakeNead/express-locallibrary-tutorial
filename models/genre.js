const mongoose = require("mongoose");

const schema = mongoose.Schema;

const genreSchema = new schema({
  name: {
    enum: [
      "Science Fiction",
      "Fantasy",
      "Thriller",
      "Mystery",
      "Historical Fiction",
      "Horror",
      "History",
      "Romance",
      "Military",
    ],
    required: true,
    minlength: 3,
    maxlength: 100,
  },
});

genreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

export.default = mongoose.model("Genre", genreSchema);