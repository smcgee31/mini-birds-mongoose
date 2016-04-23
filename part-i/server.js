var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var port = 3000;

var app = express();
app.use(bodyParser.json());
mongoose.set("debug", true); // log connection methods
mongoose.connect("mongodb://localhost/birds-mongoose-1");
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB");
});

var Sighting = require("./Sighting");

app.post('/api/sighting', function(req, res) {
  var sighting = new Sighting(req.body);
  sighting.save(function(err, s) {
    return err ? res.status(500).send(err) : res.send(s);
  });
});
 
app.get('/api/sighting', function(req, res) {
  Sighting.find({status: req.query.status}, function(err, sightings) {
    return res.send(sightings);
  });
});
 
app.delete('/api/sighting', function(req, res) {
  Sighting.findByIdAndRemove(req.query.id, function(err, sighting) {
    return res.send("Success");
  });
});
 
app.put('/api/sighting', function(req, res) {
  Sighting.findById(req.query.id, function(err, sighting) {
    sighting.update(req.body, function(err, s) {
      if (err) {
        return res.status(500).send(err);
      } else {
        Sighting.findById(req.query.id, function(e, s) {
          return res.send(s);
        });
      }
    });
  });
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
