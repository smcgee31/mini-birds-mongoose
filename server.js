// Set your "requires"
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Sighting = require('./Sighting');

// Call your app and set your "uses" and "connects"
var app = express();
app.use(bodyParser.json());
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/birds-mongoose');

// Set the port number
var port = 3000;

app.post('/api/sighting', function(req, res) {
    var sighting = new Sighting(req.body);
    sighting.save(function(err, s) {
        if (err) {
            res.status(500).json(err);  // don't forget that .json and .send are the same
        } else {
            res.send(s);  // this would be the same as res.status(200).send(s)
        }
    });
  // console.log('POST sighting');
  // res.end();
});

app.get('/api/sighting', function(req, res) {
  console.log('GET sighting');
  res.end();
});

app.delete('/api/sighting', function(req, res) {
  console.log('DELETE sighting');
  res.end();
});

app.put('/api/sighting', function(req, res) {
  console.log('PUT sighting');
  res.end();
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
