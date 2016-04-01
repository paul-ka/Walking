// MODEL TODO
var mongoose = require('mongoose');


var circuitSchema = new mongoose.Schema({
    name: String,
    date: String,
    place: String,
    locomotion: String,
    kml: String,
    distance: String,
    experience: String,
    feet: String,
    bike: String,
    occasionnel: String,
    habitue: String,
    sportif: String

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
        Circuit.model.findByIdAndUpdate(req.params.id, req.body, function () {
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