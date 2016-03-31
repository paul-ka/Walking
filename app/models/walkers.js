// MODEL WALKER
var mongoose = require('mongoose');


var walkersSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  difficulty: String
});

var Walkers = {
    
    model: mongoose.model('Walkers', walkersSchema),
    
    create: function(req, res) {
		Walkers.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Walkers.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Walkers.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Walkers.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Walkers;
