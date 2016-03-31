// MODEL TODO
var mongoose = require('mongoose');


var circuitSchema = new mongoose.Schema({
    name: String,
    place: String,
    locomotion: String,
    kml: String,
    distance: String,
    diffictulty: String
});

var Circuit = {

    model: mongoose.model('Circuit', circuitSchema),

    create: function (req, res) {
        Circuit.model.create(req.body, function () {
            res.sendStatus(200);
        })
    },

    findAll: function (req, res) {
        Circuit.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Circuit.model.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            place: req.body.place,
            locomotion: req.body.locomotion,
            kml: req.body.kml,
            distance: req.body.distance,
            diffictulty: req.body.diffictulty
        }, function () {
            res.sendStatus(200);
        })
    },

    delete: function (req, res) {
        Circuit.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}

module.exports = Circuit;