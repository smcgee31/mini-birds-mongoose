var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var port = 3000;

var app = express();
app.use(bodyParser.json());
mongoose.set("debug", true); // log connection methods
mongoose.connect("mongodb://localhost/birds-mongoose-2");
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB");
});

var Sighting = require("./Sighting");
var User = require("./User");

app.post("/api/users", function(req, res) {
  var user = new User(req.body);
  user.save(function(err, u) {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.send(u);
    }
  });
});

app.post('/api/sighting', function(req, res) {
  var sighting = new Sighting(req.body);
  sighting.save(function(err, s) {
    return err ? res.status(500).send(err) : res.send(s);
  });
});
 
app.get('/api/sighting', function(req, res) {
  var query = {};
  if (req.query.status) query["birds.status"] = req.query.status;
  if (req.query.user) query["user"] = req.query.user;
  Sighting.find(query).populate("user").exec(function(err, sightings) {
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
