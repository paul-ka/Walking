// MODEL WALKER
var mongoose = require('mongoose');


var walkersSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  experience: String,
  imageFile: String
});

var Walkers = {
    
    model: mongoose.model('Walkers', walkersSchema),
    
    create: function(req, res) {
		Walkers.model.create(req.body, function (){
		  res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Walkers.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
        console.log(req.body);
		Walkers.model.findByIdAndUpdate(req.params.id, req.body, function (){
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
