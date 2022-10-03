const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const BookModelSchema = new Scheme({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  authorBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  }
});

module.exports = mongoose.model("Books", BookModelSchema);
