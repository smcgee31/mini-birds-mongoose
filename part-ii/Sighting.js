var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var birdSchema = require("./Bird");

var sightingSchema = new Schema({
  user: {type: String, ref: "User"},
  birds: [birdSchema],
  confirmed: {type: Boolean, default: false},
  numberSeen: {type: Number, min: 1}
});

module.exports = mongoose.model("Sighting", sightingSchema);
