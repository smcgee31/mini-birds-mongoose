var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  username: {type: String, required: true},
  level: Number,
  location: String,
  member: Boolean
});

module.exports = mongoose.model("User", userSchema);
