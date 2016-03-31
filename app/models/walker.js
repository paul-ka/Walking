// MODEL TODO
var mongoose = require('mongoose');


var walkerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  difficulty: String
});

var Walker = {
    
    model: mongoose.model('Walker', walkerSchema),
    
    create: function(req, res) {
		Walker.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Walker.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Walker.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Walker.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Walker;
